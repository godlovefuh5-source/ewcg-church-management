import React, { useEffect, useState } from 'react';
import { MinistryCard } from '../../../components/ministries/MinistryCard';
import { fetchMinistries } from '../../../services/ministries';
import { Ministry } from '../../../types/api';

const MinistriesModule: React.FC = () => {
    const [ministries, setMinistries] = useState<Ministry[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadMinistries = async () => {
            try {
                const data = await fetchMinistries();
                setMinistries(data);
            } catch (err) {
                setError('Failed to load ministries');
            } finally {
                setLoading(false);
            }
        };

        loadMinistries();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="ministry-module">
            <h2 className="text-2xl font-bold mb-4">Our Ministries</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {ministries.map(ministry => (
                    <MinistryCard key={ministry.id} ministry={ministry} />
                ))}
            </div>
        </div>
    );
};

export default MinistriesModule;