import axios from 'axios';
import { Ministry } from '../types';

const API_URL = `${import.meta.env.VITE_API_URL}/ministries`;

export const getMinistries = async (): Promise<Ministry[]> => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const getMinistryById = async (id: string): Promise<Ministry> => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

export const createMinistry = async (ministry: Ministry): Promise<Ministry> => {
    const response = await axios.post(API_URL, ministry);
    return response.data;
};

export const updateMinistry = async (id: string, ministry: Ministry): Promise<Ministry> => {
    const response = await axios.put(`${API_URL}/${id}`, ministry);
    return response.data;
};

export const deleteMinistry = async (id: string): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
};