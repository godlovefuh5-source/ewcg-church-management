/**
 * Input validation utilities for security
 */

export const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const validateUrl = (url: string): boolean => {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
};

export const sanitizeInput = (input: string): string => {
    // Remove potentially dangerous characters
    return input
        .replace(/[<>]/g, '')
        .trim()
        .substring(0, 5000); // Limit length
};

export const escapeHtml = (text: string): string => {
    const map: Record<string, string> = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
    };
    return text.replace(/[&<>"']/g, (char) => map[char]);
};

export const validatePhoneNumber = (phone: string): boolean => {
    const phoneRegex = /^[0-9+\-\s()]+$/;
    return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
};

export const validateMessage = (message: string): { valid: boolean; error?: string } => {
    if (!message || message.trim().length === 0) {
        return { valid: false, error: 'Message cannot be empty' };
    }

    if (message.length < 5) {
        return { valid: false, error: 'Message must be at least 5 characters' };
    }

    if (message.length > 5000) {
        return { valid: false, error: 'Message cannot exceed 5000 characters' };
    }

    return { valid: true };
};

export const validateName = (name: string): { valid: boolean; error?: string } => {
    if (!name || name.trim().length === 0) {
        return { valid: false, error: 'Name cannot be empty' };
    }

    if (name.length < 2 || name.length > 100) {
        return { valid: false, error: 'Name must be between 2 and 100 characters' };
    }

    // Allow letters, spaces, hyphens, and apostrophes only
    if (!/^[a-zA-Z\s\-']+$/.test(name)) {
        return { valid: false, error: 'Name contains invalid characters' };
    }

    return { valid: true };
};

export const validateAmount = (amount: number): { valid: boolean; error?: string } => {
    if (!amount || amount <= 0) {
        return { valid: false, error: 'Amount must be greater than zero' };
    }

    if (amount > 1000000) {
        return { valid: false, error: 'Amount exceeds maximum limit' };
    }

    return { valid: true };
};

export const trimApiResponse = (data: any): any => {
    if (data === null || data === undefined) {
        return data;
    }

    if (typeof data === 'string') {
        return data.trim();
    }

    if (Array.isArray(data)) {
        return data.map(trimApiResponse);
    }

    if (typeof data === 'object') {
        const trimmed: any = {};
        for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                trimmed[key] = trimApiResponse(data[key]);
            }
        }
        return trimmed;
    }

    return data;
};
