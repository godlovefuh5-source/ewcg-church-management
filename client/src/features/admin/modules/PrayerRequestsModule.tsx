import React, { useEffect, useState } from 'react';
import { fetchPrayerRequests, deletePrayerRequest } from '../../../services/prayerRequest.service';
import PrayerRequestCard from '../../../components/forms/PrayerRequestForm';
import { PrayerRequest } from '../../../types';

const PrayerRequestsModule: React.FC = () => {
    const [prayerRequests, setPrayerRequests] = useState<PrayerRequest[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadPrayerRequests = async () => {
            try {
                const requests = await fetchPrayerRequests();
                setPrayerRequests(requests);
            } catch (err) {
                setError('Failed to load prayer requests');
            } finally {
                setLoading(false);
            }
        };

        loadPrayerRequests();
    }, []);

    const handleDelete = async (id: string) => {
        try {
            await deletePrayerRequest(id);
            setPrayerRequests(prayerRequests.filter(request => request.id !== id));
        } catch (err) {
            setError('Failed to delete prayer request');
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
            <h2>Prayer Requests</h2>
            {prayerRequests.map(request => (
                <PrayerRequestCard 
                    key={request.id} 
                    request={request} 
                    onDelete={() => handleDelete(request.id)} 
                />
            ))}
        </div>
    );
};

export default PrayerRequestsModule;