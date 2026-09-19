import React from 'react';
import PrayerRequestForm from '../../components/forms/PrayerRequestForm';

const PrayerRequestPage: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Prayer Request</h1>
            <p className="mb-4">We would love to pray for you. Please fill out the form below to submit your prayer request.</p>
            <PrayerRequestForm />
        </div>
    );
};

export default PrayerRequestPage;