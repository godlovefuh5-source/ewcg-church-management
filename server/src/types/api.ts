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

// Add more types as needed for other API responses.