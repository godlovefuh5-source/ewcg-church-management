import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { donate } from '../../services/donations';
import Button from '../common/Button';
import Input from '../common/Input';
import ErrorMessage from '../common/ErrorMessage';

const DonationForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [submissionError, setSubmissionError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        setSubmissionError('');

        try {
            await donate(data);
            // Handle successful donation (e.g., show a success message or redirect)
        } catch (error) {
            setSubmissionError('There was an error processing your donation. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {submissionError && <ErrorMessage message={submissionError} />}
            <Input
                label="Name"
                {...register('name', { required: 'Name is required' })}
                error={errors.name?.message}
            />
            <Input
                label="Email"
                type="email"
                {...register('email', { required: 'Email is required' })}
                error={errors.email?.message}
            />
            <Input
                label="Amount"
                type="number"
                {...register('amount', { required: 'Amount is required', min: { value: 1, message: 'Minimum donation is $1' } } )}
                error={errors.amount?.message}
            />
            <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Processing...' : 'Donate'}
            </Button>
        </form>
    );
};

export default DonationForm;