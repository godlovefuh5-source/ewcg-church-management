import React, { useEffect, useState } from 'react';
import { fetchEvents, deleteEvent } from '../../../services/events';
import EventCard from '../../../components/events/EventCard';
import { Event } from '../../../types';

const EventsModule: React.FC = () => {
    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadEvents = async () => {
            try {
                const fetchedEvents = await fetchEvents();
                setEvents(fetchedEvents);
            } catch (err) {
                setError('Failed to load events');
            } finally {
                setLoading(false);
            }
        };

        loadEvents();
    }, []);

    const handleDelete = async (eventId: string) => {
        try {
            await deleteEvent(eventId);
            setEvents(events.filter(event => event.id !== eventId));
        } catch (err) {
            setError('Failed to delete event');
        }
    };

    if (loading) {
        return <div>Loading events...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Events Management</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {events.map(event => (
                    <EventCard key={event.id} event={event} onDelete={handleDelete} />
                ))}
            </div>
        </div>
    );
};

export default EventsModule;