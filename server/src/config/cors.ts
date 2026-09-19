import { CorsOptions } from 'cors';

const corsOptions: CorsOptions = {
  origin: process.env.CLIENT_URL, // Allow requests from the client application
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};

export default corsOptions;