import React, { useEffect, useState } from 'react';
import { fetchSermons, deleteSermon } from '../../../services/sermons';
import SermonCard from '../../../components/sermons/SermonCard';
import { Sermon } from '../../../types';

const SermonsModule: React.FC = () => {
    const [sermons, setSermons] = useState<Sermon[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadSermons = async () => {
            try {
                const data = await fetchSermons();
                setSermons(data);
            } catch (err) {
                setError('Failed to load sermons');
            } finally {
                setLoading(false);
            }
        };

        loadSermons();
    }, []);

    const handleDelete = async (id: string) => {
        try {
            await deleteSermon(id);
            setSermons(sermons.filter(sermon => sermon.id !== id));
        } catch (err) {
            setError('Failed to delete sermon');
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h2>Sermons Management</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sermons.map(sermon => (
                    <SermonCard key={sermon.id} sermon={sermon} onDelete={handleDelete} />
                ))}
            </div>
        </div>
    );
};

export default SermonsModule;