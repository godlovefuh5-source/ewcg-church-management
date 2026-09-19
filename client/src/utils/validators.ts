import { z } from 'zod';

// Example of a simple email validation schema
export const emailValidator = z.string().email('Invalid email address');

// Example of a password validation schema
export const passwordValidator = z.string().min(8, 'Password must be at least 8 characters long');

// Example of a contact form validation schema
export const contactFormValidator = z.object({
  name: z.string().min(1, 'Name is required'),
  email: emailValidator,
  phone: z.string().optional(),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(1, 'Message is required'),
});

// Example of a prayer request validation schema
export const prayerRequestValidator = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().optional().email('Invalid email address'),
  phone: z.string().optional(),
  request: z.string().min(1, 'Prayer request is required'),
});

// Example of a donation form validation schema
export const donationFormValidator = z.object({
  amount: z.number().positive('Amount must be greater than zero'),
  category: z.string().min(1, 'Category is required'),
});