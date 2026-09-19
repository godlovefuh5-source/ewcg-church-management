import axios from 'axios';
import { Event } from '../types';

const API_URL = import.meta.env.VITE_API_URL;

export const getEvents = async (): Promise<Event[]> => {
    const response = await axios.get(`${API_URL}/api/events`);
    return response.data.data;
};

export const getEventById = async (id: string): Promise<Event> => {
    const response = await axios.get(`${API_URL}/api/events/${id}`);
    return response.data.data;
};

export const createEvent = async (eventData: Omit<Event, 'id'>): Promise<Event> => {
    const response = await axios.post(`${API_URL}/api/events`, eventData);
    return response.data.data;
};

export const updateEvent = async (id: string, eventData: Partial<Omit<Event, 'id'>>): Promise<Event> => {
    const response = await axios.put(`${API_URL}/api/events/${id}`, eventData);
    return response.data.data;
};

export const deleteEvent = async (id: string): Promise<void> => {
    await axios.delete(`${API_URL}/api/events/${id}`);
};