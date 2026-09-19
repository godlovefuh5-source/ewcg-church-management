import React, { useEffect, useState } from 'react';
import { fetchMinistries } from '../../services/ministries';
import MinistryCard from '../../components/ministries/MinistryCard';

const MinistriesPage: React.FC = () => {
    const [ministries, setMinistries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getMinistries = async () => {
            try {
                const data = await fetchMinistries();
                setMinistries(data);
            } catch (err) {
                setError('Failed to fetch ministries');
            } finally {
                setLoading(false);
            }
        };

        getMinistries();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="ministry-page">
            <h1 className="text-2xl font-bold mb-4">Our Ministries</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {ministries.map((ministry) => (
                    <MinistryCard key={ministry.id} ministry={ministry} />
                ))}
            </div>
        </div>
    );
};

export default MinistriesPage;