import React from 'react';
import ContactForm from '../../components/forms/ContactForm';

const ContactPage: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-deep-navy mb-4">Contact Us</h1>
            <p className="text-lg text-gray-700 mb-6">
                We would love to hear from you! Please fill out the form below to get in touch with us.
            </p>
            <ContactForm />
        </div>
    );
};

export default ContactPage;