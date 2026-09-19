import { body } from 'express-validator';

export const createEventValidator = [
    body('title')
        .notEmpty()
        .withMessage('Title is required')
        .isString()
        .withMessage('Title must be a string'),
    
    body('description')
        .optional()
        .isString()
        .withMessage('Description must be a string'),

    body('startDate')
        .notEmpty()
        .withMessage('Start date is required')
        .isISO8601()
        .withMessage('Start date must be a valid date'),

    body('endDate')
        .optional()
        .isISO8601()
        .withMessage('End date must be a valid date'),

    body('startTime')
        .notEmpty()
        .withMessage('Start time is required')
        .isString()
        .withMessage('Start time must be a string'),

    body('endTime')
        .optional()
        .isString()
        .withMessage('End time must be a string'),

    body('location')
        .optional()
        .isString()
        .withMessage('Location must be a string'),

    body('image')
        .optional()
        .isString()
        .withMessage('Image URL must be a string'),

    body('organizer')
        .optional()
        .isString()
        .withMessage('Organizer must be a string'),

    body('registrationLink')
        .optional()
        .isURL()
        .withMessage('Registration link must be a valid URL'),

    body('registrationStatus')
        .optional()
        .isIn(['open', 'closed'])
        .withMessage('Registration status must be either open or closed'),
];

export const updateEventValidator = [
    body('title')
        .optional()
        .isString()
        .withMessage('Title must be a string'),

    body('description')
        .optional()
        .isString()
        .withMessage('Description must be a string'),

    body('startDate')
        .optional()
        .isISO8601()
        .withMessage('Start date must be a valid date'),

    body('endDate')
        .optional()
        .isISO8601()
        .withMessage('End date must be a valid date'),

    body('startTime')
        .optional()
        .isString()
        .withMessage('Start time must be a string'),

    body('endTime')
        .optional()
        .isString()
        .withMessage('End time must be a string'),

    body('location')
        .optional()
        .isString()
        .withMessage('Location must be a string'),

    body('image')
        .optional()
        .isString()
        .withMessage('Image URL must be a string'),

    body('organizer')
        .optional()
        .isString()
        .withMessage('Organizer must be a string'),

    body('registrationLink')
        .optional()
        .isURL()
        .withMessage('Registration link must be a valid URL'),

    body('registrationStatus')
        .optional()
        .isIn(['open', 'closed'])
        .withMessage('Registration status must be either open or closed'),
];