import { body } from 'express-validator';

export const createServiceValidator = [
    body('name')
        .isString()
        .withMessage('Service name must be a string')
        .notEmpty()
        .withMessage('Service name is required'),
    body('day')
        .isString()
        .withMessage('Day must be a string')
        .notEmpty()
        .withMessage('Day is required'),
    body('time')
        .isString()
        .withMessage('Time must be a string')
        .notEmpty()
        .withMessage('Time is required'),
    body('location')
        .isString()
        .withMessage('Location must be a string')
        .notEmpty()
        .withMessage('Location is required'),
    body('description')
        .optional()
        .isString()
        .withMessage('Description must be a string'),
    body('status')
        .isBoolean()
        .withMessage('Status must be a boolean'),
    body('additionalInfo')
        .optional()
        .isString()
        .withMessage('Additional information must be a string'),
];