// This file defines TypeScript types for API responses and requests.

export interface ApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
}

export interface ApiError {
    success: false;
    message: string;
    errors?: string[];
}

// Example types for specific API responses
export interface Sermon {
    id: string;
    title: string;
    speaker: string;
    description: string;
    date: string;
    bibleVerse: string;
    category: string;
    thumbnail: string;
    videoUrl?: string;
    audioUrl?: string;
    pdfUrl?: string;
    duration: number;
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
    registrationStatus: string;
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

export interface User {
    id: string;
    email: string;
    password: string;
    role: 'USER' | 'ADMIN' | 'SUPER_ADMIN';
    createdAt: string;
    updatedAt: string;
}

export interface Leader {
    id: string;
    name: string;
    position: string;
    biography: string;
    image?: string;
    email?: string;
    phone?: string;
    socialLinks?: Record<string, string>;
    createdAt?: string;
    updatedAt?: string;
}

export interface Gallery {
    id: string;
    name: string;
    description: string;
    images: string[];
    createdAt?: string;
    updatedAt?: string;
}

export interface Donation {
    id: string;
    transactionId: string;
    amount: number;
    currency: string;
    category: string;
    paymentProvider: string;
    status: string;
    donorName: string;
    donorEmail?: string;
    donorPhone?: string;
    message?: string;
    createdAt: string;
    updatedAt?: string;
}

export interface PrayerRequest {
    id: string;
    name: string;
    email: string;
    phone?: string;
    request: string;
    status?: string;
    createdAt: string;
    updatedAt?: string;
}

export interface ContactMessage {
    id: string;
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
    status?: string;
    createdAt: string;
    updatedAt?: string;
}

export interface LiveStream {
    id: string;
    title: string;
    description: string;
    status: 'active' | 'inactive' | 'ended';
    facebookUrl?: string;
    youtubeUrl?: string;
    startTime?: string;
    endTime?: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface Service {
    id: string;
    name: string;
    dayOfWeek: string;
    time: string;
    location: string;
    description?: string;
    preacher?: string;
    organizer?: string;
    status?: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface Settings {
    id: string;
    churchName: string;
    churchLogo: string;
    heroTitle: string;
    heroImage: string;
    welcomeMessage: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    email: string;
    phone: string;
    socialLinks: Record<string, string>;
    serviceSchedules: Service[];
    createdAt?: string;
    updatedAt?: string;
}

// Add more types as needed for other API responses.