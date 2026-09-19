import React, { useEffect, useState } from 'react';
import { fetchSermons } from '../../services/sermons';
import SermonCard from '../../components/sermons/SermonCard';
import SermonFilters from '../../components/sermons/SermonFilters';

const SermonsPage: React.FC = () => {
    const [sermons, setSermons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getSermons = async () => {
            try {
                const data = await fetchSermons();
                setSermons(data);
            } catch (err) {
                setError('Failed to fetch sermons');
            } finally {
                setLoading(false);
            }
        };

        getSermons();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="sermons-page">
            <h1 className="text-2xl font-bold mb-4">Sermons</h1>
            <SermonFilters />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sermons.map((sermon) => (
                    <SermonCard key={sermon.id} sermon={sermon} />
                ))}
            </div>
        </div>
    );
};

export default SermonsPage;