import axios from 'axios';
import { ContactMessage } from '../types';

const API_URL = '/api/contact';

export const sendContactMessage = async (message: ContactMessage) => {
    try {
        const response = await axios.post(API_URL, message);
        return response.data;
    } catch (error) {
        throw new Error('Error sending contact message');
    }
};