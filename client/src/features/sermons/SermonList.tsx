import React, { useEffect, useState } from 'react';
import { fetchSermons } from '../../services/sermons';
import SermonCard from '../../components/sermons/SermonCard';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import ErrorMessage from '../../components/common/ErrorMessage';

const SermonList: React.FC = () => {
    const [sermons, setSermons] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getSermons = async () => {
            try {
                const data = await fetchSermons();
                setSermons(data);
            } catch (err) {
                setError('Failed to fetch sermons. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        getSermons();
    }, []);

    if (loading) {
        return <LoadingSpinner />;
    }

    if (error) {
        return <ErrorMessage message={error} />;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sermons.map((sermon) => (
                <SermonCard key={sermon.id} sermon={sermon} />
            ))}
        </div>
    );
};

export default SermonList;