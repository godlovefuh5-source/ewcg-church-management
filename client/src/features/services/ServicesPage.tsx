import React, { useEffect, useState } from 'react';
import { fetchServices } from '../../services/services';
import ServiceCard from '../../components/common/Card';

const ServicesPage: React.FC = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getServices = async () => {
            try {
                const data = await fetchServices();
                setServices(data);
            } catch (err) {
                setError('Failed to fetch services.');
            } finally {
                setLoading(false);
            }
        };

        getServices();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Our Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                ))}
            </div>
        </div>
    );
};

export default ServicesPage;