import axios from 'axios';
import { Donation } from '../types';

const API_URL = `${import.meta.env.VITE_API_URL}/api/donations`;

export const createDonation = async (donationData: Donation) => {
    try {
        const response = await axios.post(API_URL, donationData);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Error creating donation');
    }
};

export const getDonations = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Error fetching donations');
    }
};

export const getDonationById = async (id: string) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Error fetching donation');
    }
};

export const updateDonation = async (id: string, donationData: Donation) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, donationData);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Error updating donation');
    }
};

export const deleteDonation = async (id: string) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Error deleting donation');
    }
};