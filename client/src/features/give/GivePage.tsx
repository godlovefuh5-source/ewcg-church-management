import React from 'react';
import DonationForm from '../../components/forms/DonationForm';

const GivePage: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-deep-navy mb-6">Give to EWCG</h1>
            <p className="text-lg text-gray-700 mb-4">
                Your generosity helps us continue our mission of spreading the word of God and serving our community. 
                Please consider making a donation today.
            </p>
            <DonationForm />
        </div>
    );
};

export default GivePage;