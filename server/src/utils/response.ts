import { Response } from 'express';

interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
  errors?: string[];
}

const sendResponse = <T>(res: Response, response: ApiResponse<T>): Response => {
  const { success, message, data, errors } = response;
  return res.status(success ? 200 : 400).json({
    success,
    message,
    data,
    errors,
  });
};

export { sendResponse, ApiResponse };