import React, { useEffect, useState } from 'react';
import { fetchLiveStreamSettings } from '../../services/liveStream';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import ErrorMessage from '../../components/common/ErrorMessage';

const LiveStreamPage: React.FC = () => {
    const [liveStreamData, setLiveStreamData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getLiveStreamSettings = async () => {
            try {
                const data = await fetchLiveStreamSettings();
                setLiveStreamData(data);
            } catch (err) {
                setError('Failed to fetch live stream settings.');
            } finally {
                setLoading(false);
            }
        };

        getLiveStreamSettings();
    }, []);

    if (loading) {
        return <LoadingSpinner />;
    }

    if (error) {
        return <ErrorMessage message={error} />;
    }

    return (
        <div className="live-stream-page">
            <h1 className="text-2xl font-bold">Live Stream</h1>
            {liveStreamData?.status === 'LIVE' ? (
                <div>
                    <h2 className="text-xl">🔴 We Are Live!</h2>
                    <iframe
                        src={liveStreamData.url}
                        title="Live Stream"
                        className="w-full h-96"
                        allowFullScreen
                    />
                </div>
            ) : (
                <div>
                    <h2 className="text-xl">Next Scheduled Live Service</h2>
                    <p>{liveStreamData?.nextScheduled}</p>
                </div>
            )}
        </div>
    );
};

export default LiveStreamPage;