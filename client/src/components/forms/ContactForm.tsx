import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { sendContactMessage } from '../../services/contact';

const ContactForm: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);

    const onSubmit = async (data: any) => {
        try {
            await sendContactMessage(data);
            setSubmissionStatus('Your message has been sent successfully!');
        } catch (error) {
            setSubmissionStatus('There was an error sending your message. Please try again later.');
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                    id="name"
                    type="text"
                    {...register('name', { required: 'Name is required' })}
                    className={`mt-1 block w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-gold focus:border-gold`}
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                    id="email"
                    type="email"
                    {...register('email', { required: 'Email is required' })}
                    className={`mt-1 block w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-gold focus:border-gold`}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
            <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone (optional)</label>
                <input
                    id="phone"
                    type="tel"
                    {...register('phone')}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-gold focus:border-gold"
                />
            </div>
            <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <input
                    id="subject"
                    type="text"
                    {...register('subject', { required: 'Subject is required' })}
                    className={`mt-1 block w-full border ${errors.subject ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-gold focus:border-gold`}
                />
                {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                    id="message"
                    {...register('message', { required: 'Message is required' })}
                    className={`mt-1 block w-full border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-gold focus:border-gold`}
                    rows={4}
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
            </div>
            <button type="submit" className="w-full bg-gold text-white py-2 rounded-md hover:bg-bright-gold">Send Message</button>
            {submissionStatus && <p className="mt-4 text-center">{submissionStatus}</p>}
        </form>
    );
};

export default ContactForm;