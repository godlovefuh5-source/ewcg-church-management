import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Ensure to set this in your .env file
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptors for request and response
api.interceptors.request.use(
  (config) => {
    // Add any custom logic before sending the request
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    // Handle response data
    return response.data;
  },
  (error) => {
    // Handle errors
    return Promise.reject(error);
  }
);

export default api;