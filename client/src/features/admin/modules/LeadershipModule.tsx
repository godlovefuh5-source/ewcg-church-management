import React, { useEffect, useState } from 'react';
import LeadershipCard from '../../../components/leadership/LeadershipCard';
import { fetchLeaders } from '../../../services/leader.service';
import { Leader } from '../../../types/api';

const LeadershipModule: React.FC = () => {
    const [leaders, setLeaders] = useState<Leader[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getLeaders = async () => {
            try {
                const data = await fetchLeaders();
                setLeaders(data);
            } catch (err) {
                setError('Failed to fetch leaders');
            } finally {
                setLoading(false);
            }
        };

        getLeaders();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {leaders.map((leader) => (
                    <LeadershipCard key={leader.id} leader={leader} />
                ))}
            </div>
        </div>
    );
};

export default LeadershipModule;