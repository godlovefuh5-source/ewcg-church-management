import React, { useEffect, useState } from 'react';
import { fetchLiveStreamSettings } from '../../../services/liveStream';
import { LiveStreamSettings } from '../../../types/api';

const LiveStreamModule: React.FC = () => {
    const [settings, setSettings] = useState<LiveStreamSettings | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getLiveStreamSettings = async () => {
            try {
                const data = await fetchLiveStreamSettings();
                setSettings(data);
            } catch (err) {
                setError('Failed to fetch live stream settings.');
            } finally {
                setLoading(false);
            }
        };

        getLiveStreamSettings();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Live Stream Settings</h2>
            <p>Stream Title: {settings?.title}</p>
            <p>Stream Description: {settings?.description}</p>
            <p>Stream Status: {settings?.status}</p>
            {settings?.isLive ? (
                <div>
                    <h3>Currently Live!</h3>
                    <iframe
                        src={settings.liveUrl}
                        title="Live Stream"
                        width="100%"
                        height="500"
                        allowFullScreen
                    />
                </div>
            ) : (
                <p>Next scheduled stream: {settings?.nextStream}</p>
            )}
        </div>
    );
};

export default LiveStreamModule;