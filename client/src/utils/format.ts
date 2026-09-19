import { format } from 'date-fns';

export const formatDate = (date: Date | string): string => {
    return format(new Date(date), 'MMMM dd, yyyy');
};

export const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(amount);
};

export const truncateText = (text: string, length: number): string => {
    if (text.length <= length) return text;
    return text.slice(0, length) + '...';
};