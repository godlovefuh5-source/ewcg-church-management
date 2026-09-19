import React, { useEffect, useState } from 'react';
import { Donation } from '../../../types';
import { fetchDonations, deleteDonation } from '../../../services/donations';
import DonationCard from '../../../components/common/Card';
import { Button } from '../../../components/common/Button';

const DonationsModule: React.FC = () => {
    const [donations, setDonations] = useState<Donation[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadDonations = async () => {
            try {
                const data = await fetchDonations();
                setDonations(data);
            } catch (err) {
                setError('Failed to load donations');
            } finally {
                setLoading(false);
            }
        };

        loadDonations();
    }, []);

    const handleDelete = async (id: string) => {
        try {
            await deleteDonation(id);
            setDonations(donations.filter(donation => donation.id !== id));
        } catch (err) {
            setError('Failed to delete donation');
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Donations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {donations.map(donation => (
                    <DonationCard key={donation.id} donation={donation}>
                        <Button onClick={() => handleDelete(donation.id)}>Delete</Button>
                    </DonationCard>
                ))}
            </div>
        </div>
    );
};

export default DonationsModule;