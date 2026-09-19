import { body } from 'express-validator';

export const settingsValidator = [
    body('churchName')
        .isString()
        .withMessage('Church name must be a string')
        .notEmpty()
        .withMessage('Church name is required'),
    
    body('logoUrl')
        .isURL()
        .withMessage('Logo URL must be a valid URL')
        .notEmpty()
        .withMessage('Logo URL is required'),

    body('welcomeMessage')
        .isString()
        .withMessage('Welcome message must be a string')
        .optional(),

    body('vision')
        .isString()
        .withMessage('Vision must be a string')
        .optional(),

    body('mission')
        .isString()
        .withMessage('Mission must be a string')
        .optional(),

    body('phone')
        .isString()
        .withMessage('Phone number must be a string')
        .optional(),

    body('email')
        .isEmail()
        .withMessage('Email must be a valid email address')
        .optional(),

    body('address')
        .isString()
        .withMessage('Address must be a string')
        .optional(),

    body('serviceSchedules')
        .isArray()
        .withMessage('Service schedules must be an array')
        .optional(),
];