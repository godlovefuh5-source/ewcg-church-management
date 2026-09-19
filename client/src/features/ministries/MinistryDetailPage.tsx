import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMinistryById } from '../../services/ministries';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import ErrorMessage from '../../components/common/ErrorMessage';

const MinistryDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const [ministry, setMinistry] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getMinistry = async () => {
            try {
                const data = await fetchMinistryById(id);
                setMinistry(data);
            } catch (err) {
                setError('Failed to fetch ministry details.');
            } finally {
                setLoading(false);
            }
        };

        getMinistry();
    }, [id]);

    if (loading) {
        return <LoadingSpinner />;
    }

    if (error) {
        return <ErrorMessage message={error} />;
    }

    return (
        <div className="ministry-detail">
            <h1 className="text-3xl font-bold">{ministry.name}</h1>
            <img src={ministry.image} alt={ministry.name} className="my-4" />
            <p className="text-lg">{ministry.description}</p>
            <h2 className="text-2xl mt-4">Leader: {ministry.leader}</h2>
            <h3 className="text-xl">Meeting Schedule: {ministry.schedule}</h3>
            <h4 className="text-lg">Contact: {ministry.contact}</h4>
            <h5 className="text-lg">Activities: {ministry.activities.join(', ')}</h5>
        </div>
    );
};

export default MinistryDetailPage;