import dotenv from 'dotenv';

dotenv.config();

export const PORT = Number(process.env.PORT) || 5050;
export const SPACEX_BASE_API_URI = process.env.SPACEX_BASE_API_URI || '';
export const NODE_ENV = process.env.NODE_ENV || 'development';
