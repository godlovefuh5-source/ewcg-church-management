import React, { useEffect, useState } from 'react';
import { fetchSettings, updateSettings } from '../../../services/settings';
import { SettingsForm } from './SettingsForm';
import { Settings } from '../../../types';

const SettingsModule: React.FC = () => {
    const [settings, setSettings] = useState<Settings | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadSettings = async () => {
            try {
                const fetchedSettings = await fetchSettings();
                setSettings(fetchedSettings);
            } catch (err) {
                setError('Failed to load settings');
            } finally {
                setLoading(false);
            }
        };

        loadSettings();
    }, []);

    const handleUpdateSettings = async (updatedSettings: Settings) => {
        try {
            await updateSettings(updatedSettings);
            setSettings(updatedSettings);
        } catch (err) {
            setError('Failed to update settings');
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Settings</h2>
            {settings && (
                <SettingsForm settings={settings} onUpdate={handleUpdateSettings} />
            )}
        </div>
    );
};

export default SettingsModule;