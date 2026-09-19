import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEventById } from '../../services/events';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import ErrorMessage from '../../components/common/ErrorMessage';

const EventDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const [event, setEvent] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const fetchedEvent = await getEventById(id);
                setEvent(fetchedEvent);
            } catch (err) {
                setError('Failed to fetch event details.');
            } finally {
                setLoading(false);
            }
        };

        fetchEvent();
    }, [id]);

    if (loading) {
        return <LoadingSpinner />;
    }

    if (error) {
        return <ErrorMessage message={error} />;
    }

    if (!event) {
        return <ErrorMessage message="Event not found." />;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
            <p className="text-lg mb-2">{event.description}</p>
            <p className="text-md text-gray-600">
                {new Date(event.startDate).toLocaleString()} - {new Date(event.endDate).toLocaleString()}
            </p>
            <p className="text-md text-gray-600">Location: {event.location}</p>
            {event.image && <img src={event.image} alt={event.title} className="mt-4 rounded" />}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold">Organizer</h2>
                <p>{event.organizer}</p>
            </div>
        </div>
    );
};

export default EventDetailPage;