export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';

export const SOCIAL_MEDIA_LINKS = {
    facebook: '',
    youtube: '',
    instagram: '',
    tiktok: '',
    whatsapp: '',
    twitter: ''
};

export const DEFAULT_SERVICE_SCHEDULE = {
    nextService: {
        day: 'Sunday',
        time: '10:00 AM',
        location: 'Church location'
    },
    bibleStudy: {
        day: 'Wednesday',
        time: '6:30 PM'
    }
};

export const DONATION_CATEGORIES = [
    'Tithe',
    'Offering',
    'Missions',
    'Building Project',
    'Special Donation',
    'Other'
];