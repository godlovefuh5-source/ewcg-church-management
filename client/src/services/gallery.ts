import axios from 'axios';
import { GalleryImage } from '../types';

const API_URL = `${import.meta.env.VITE_API_URL}/api/gallery`;

export const fetchGalleryImages = async (): Promise<GalleryImage[]> => {
    const response = await axios.get(API_URL);
    return response.data.data;
};

export const uploadGalleryImage = async (formData: FormData): Promise<GalleryImage> => {
    const response = await axios.post(API_URL, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    return response.data.data;
};

export const deleteGalleryImage = async (imageId: string): Promise<void> => {
    await axios.delete(`${API_URL}/${imageId}`);
};