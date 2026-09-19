import axios from 'axios';
import { useEffect, useState } from 'react';

const API_URL = `${import.meta.env.VITE_API_URL}/settings`;

export const useSettings = () => {
    const [settings, setSettings] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSettings = async () => {
            try {
                const response = await axios.get(API_URL);
                setSettings(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchSettings();
    }, []);

    return { settings, loading, error };
};

export const updateSettings = async (newSettings) => {
    try {
        const response = await axios.put(API_URL, newSettings);
        return response.data;
    } catch (error) {
        throw error;
    }
};