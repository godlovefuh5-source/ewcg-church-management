import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/auth';

export const login = async (email: string, password: string) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { email, password });
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};

export const logout = async () => {
    try {
        await axios.post(`${API_URL}/logout`);
    } catch (error) {
        throw error.response?.data || error.message;
    }
};

export const getCurrentUser = async () => {
    try {
        const response = await axios.get(`${API_URL}/me`);
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};