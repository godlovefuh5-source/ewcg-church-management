import axios from 'axios';
import { API_URL } from '../utils/constants';

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Services API
export const getServices = async () => {
  const response = await apiClient.get('/api/services');
  return response.data;
};

export const getServiceById = async (id: string) => {
  const response = await apiClient.get(`/api/services/${id}`);
  return response.data;
};

export const createService = async (serviceData: any) => {
  const response = await apiClient.post('/api/services', serviceData);
  return response.data;
};

export const updateService = async (id: string, serviceData: any) => {
  const response = await apiClient.put(`/api/services/${id}`, serviceData);
  return response.data;
};

export const deleteService = async (id: string) => {
  const response = await apiClient.delete(`/api/services/${id}`);
  return response.data;
};