// This file defines TypeScript types used throughout the client-side application.

export interface User {
    id: string;
    name: string;
    email: string;
    role: 'SUPER_ADMIN' | 'ADMIN' | 'EDITOR';
}

export interface Sermon {
    id: string;
    title: string;
    speaker: string;
    description: string;
    date: string;
    bibleReference: string;
    category: string;
    thumbnail: string;
    videoUrl?: string;
    audioUrl?: string;
    pdfUrl?: string;
    duration: number; // in seconds
}

export interface Event {
    id: string;
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    startTime: string;
    endTime: string;
    location: string;
    image: string;
    organizer: string;
    registrationStatus: 'OPEN' | 'CLOSED';
    registrationLink?: string;
}

export interface Ministry {
    id: string;
    name: string;
    description: string;
    image: string;
    leader: string;
    meetingSchedule: string;
    contactInfo: string;
    activities: string[];
    gallery: string[];
}

export interface Donation {
    id: string;
    transactionId: string;
    amount: number;
    currency: string;
    category: string;
    paymentProvider: string;
    status: 'PENDING' | 'SUCCESS' | 'FAILED' | 'CANCELLED';
    donorName?: string;
    donorEmail?: string;
    createdAt: string;
}

export interface PrayerRequest {
    id: string;
    name: string;
    email?: string;
    phone?: string;
    request: string;
}

export interface ContactMessage {
    id: string;
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

export interface LiveStream {
    id: string;
    title: string;
    description: string;
    status: 'LIVE' | 'OFFLINE';
    facebookUrl?: string;
    youtubeUrl?: string;
}

export interface GalleryImage {
    id: string;
    url: string;
    description?: string;
    category: string;
}

export interface Leader {
    id: string;
    name: string;
    position: string;
    biography: string;
    socialLinks?: { [key: string]: string };
}