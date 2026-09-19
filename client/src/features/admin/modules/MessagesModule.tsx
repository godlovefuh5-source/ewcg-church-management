import React, { useEffect, useState } from 'react';
import { fetchMessages, deleteMessage } from '../../../services/api';
import { Message } from '../../../types';
import LoadingSpinner from '../../../components/common/LoadingSpinner';
import ErrorMessage from '../../../components/common/ErrorMessage';

const MessagesModule: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadMessages = async () => {
            try {
                const data = await fetchMessages();
                setMessages(data);
            } catch (err) {
                setError('Failed to load messages.');
            } finally {
                setLoading(false);
            }
        };

        loadMessages();
    }, []);

    const handleDelete = async (id: string) => {
        try {
            await deleteMessage(id);
            setMessages(messages.filter(message => message.id !== id));
        } catch (err) {
            setError('Failed to delete message.');
        }
    };

    if (loading) return <LoadingSpinner />;
    if (error) return <ErrorMessage message={error} />;

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Messages</h2>
            <ul>
                {messages.map(message => (
                    <li key={message.id} className="flex justify-between items-center border-b py-2">
                        <div>
                            <strong>{message.subject}</strong>
                            <p>{message.body}</p>
                        </div>
                        <button
                            onClick={() => handleDelete(message.id)}
                            className="text-red-500 hover:text-red-700"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MessagesModule;