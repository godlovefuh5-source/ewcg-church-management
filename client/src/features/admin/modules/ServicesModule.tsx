import React, { useEffect, useState } from 'react';
import { fetchServices, deleteService } from '../../../services/services';
import { Service } from '../../../types/index';
import { Button, LoadingSpinner, ErrorMessage } from '../../../components/common';

const ServicesModule: React.FC = () => {
    const [services, setServices] = useState<Service[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadServices = async () => {
            try {
                const data = await fetchServices();
                setServices(data);
            } catch (err) {
                setError('Failed to load services.');
            } finally {
                setLoading(false);
            }
        };

        loadServices();
    }, []);

    const handleDelete = async (id: string) => {
        if (window.confirm('Are you sure you want to delete this service?')) {
            try {
                await deleteService(id);
                setServices(services.filter(service => service.id !== id));
            } catch (err) {
                setError('Failed to delete service.');
            }
        }
    };

    if (loading) {
        return <LoadingSpinner />;
    }

    if (error) {
        return <ErrorMessage message={error} />;
    }

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Manage Services</h2>
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2">Service Name</th>
                        <th className="py-2">Day</th>
                        <th className="py-2">Time</th>
                        <th className="py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {services.map(service => (
                        <tr key={service.id}>
                            <td className="py-2">{service.name}</td>
                            <td className="py-2">{service.day}</td>
                            <td className="py-2">{service.time}</td>
                            <td className="py-2">
                                <Button onClick={() => handleDelete(service.id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ServicesModule;