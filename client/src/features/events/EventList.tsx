import React, { useEffect, useState } from 'react';
import { fetchEvents } from '../../services/events';
import EventCard from '../../components/events/EventCard';

const EventList: React.FC = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getEvents = async () => {
            try {
                const data = await fetchEvents();
                setEvents(data);
            } catch (err) {
                setError('Failed to fetch events');
            } finally {
                setLoading(false);
            }
        };

        getEvents();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="event-list">
            {events.length === 0 ? (
                <p>No upcoming events</p>
            ) : (
                events.map(event => (
                    <EventCard key={event.id} event={event} />
                ))
            )}
        </div>
    );
};

export default EventList;