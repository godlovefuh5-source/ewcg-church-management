import axios from 'axios';
import { Sermon } from '../types';

const API_URL = `${import.meta.env.VITE_API_URL}/api/sermons`;

export const getSermons = async (): Promise<Sermon[]> => {
    const response = await axios.get(API_URL);
    return response.data.data;
};

export const getSermonById = async (id: string): Promise<Sermon> => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data.data;
};

export const createSermon = async (sermon: Sermon): Promise<Sermon> => {
    const response = await axios.post(API_URL, sermon);
    return response.data.data;
};

export const updateSermon = async (id: string, sermon: Sermon): Promise<Sermon> => {
    const response = await axios.put(`${API_URL}/${id}`, sermon);
    return response.data.data;
};

export const deleteSermon = async (id: string): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
};