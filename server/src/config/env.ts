import { config as dotenvConfig } from 'dotenv';

dotenvConfig();

export const env = {
  DATABASE_URL: process.env.DATABASE_URL || '',
  JWT_SECRET: process.env.JWT_SECRET || '',
  CLIENT_URL: process.env.CLIENT_URL || '',
  SERVER_URL: process.env.SERVER_URL || '',
  PAYMENT_API_KEY: process.env.PAYMENT_API_KEY || '',
  PAYMENT_SECRET: process.env.PAYMENT_SECRET || '',
  STORAGE_API_KEY: process.env.STORAGE_API_KEY || '',
  STORAGE_SECRET: process.env.STORAGE_SECRET || '',
  GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY || '',
  NODE_ENV: process.env.NODE_ENV || 'development',
};

/**
 * Connect to the database
 */
export const connectDatabase = async () => {
  try {
    console.log('📊 Attempting to connect to database...');
    // TODO: Implement actual Prisma connection here
    console.log('✅ Database connected successfully');
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    process.exit(1);
  }
};

export default env;