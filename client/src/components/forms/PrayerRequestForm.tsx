import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { submitPrayerRequest } from '../../services/api';

const PrayerRequestForm: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data: any) => {
        setLoading(true);
        try {
            await submitPrayerRequest(data);
            toast.success('Prayer request submitted successfully!');
        } catch (error) {
            toast.error('Failed to submit prayer request. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="p-4 bg-white rounded shadow-md">
            <h2 className="text-xl font-semibold mb-4">Submit a Prayer Request</h2>
            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                    type="text"
                    id="name"
                    {...register('name', { required: 'Name is required' })}
                    className={`mt-1 block w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email (optional)</label>
                <input
                    type="email"
                    id="email"
                    {...register('email')}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone (optional)</label>
                <input
                    type="tel"
                    id="phone"
                    {...register('phone')}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="prayerRequest" className="block text-sm font-medium text-gray-700">Prayer Request</label>
                <textarea
                    id="prayerRequest"
                    {...register('prayerRequest', { required: 'Prayer request is required' })}
                    className={`mt-1 block w-full border ${errors.prayerRequest ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-opacity-50`}
                    rows={4}
                />
                {errors.prayerRequest && <p className="text-red-500 text-sm">{errors.prayerRequest.message}</p>}
            </div>
            <button
                type="submit"
                disabled={loading}
                className="w-full bg-deep-navy text-white font-semibold py-2 rounded-md hover:bg-gold transition duration-200"
            >
                {loading ? 'Submitting...' : 'Submit Prayer Request'}
            </button>
        </form>
    );
};

export default PrayerRequestForm;