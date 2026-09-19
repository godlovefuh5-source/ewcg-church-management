import { body } from 'express-validator';

export const createSermonValidator = [
    body('title')
        .notEmpty()
        .withMessage('Title is required')
        .isString()
        .withMessage('Title must be a string')
        .isLength({ max: 255 })
        .withMessage('Title must not exceed 255 characters'),

    body('speaker')
        .notEmpty()
        .withMessage('Speaker is required')
        .isString()
        .withMessage('Speaker must be a string')
        .isLength({ max: 255 })
        .withMessage('Speaker must not exceed 255 characters'),

    body('description')
        .optional()
        .isString()
        .withMessage('Description must be a string'),

    body('date')
        .notEmpty()
        .withMessage('Date is required')
        .isISO8601()
        .withMessage('Date must be a valid ISO 8601 date'),

    body('bibleVerse')
        .optional()
        .isString()
        .withMessage('Bible verse must be a string'),

    body('category')
        .optional()
        .isString()
        .withMessage('Category must be a string'),

    body('thumbnail')
        .optional()
        .isString()
        .withMessage('Thumbnail must be a string'),

    body('videoUrl')
        .optional()
        .isURL()
        .withMessage('Video URL must be a valid URL'),

    body('audioUrl')
        .optional()
        .isURL()
        .withMessage('Audio URL must be a valid URL'),

    body('pdfUrl')
        .optional()
        .isURL()
        .withMessage('PDF URL must be a valid URL'),

    body('duration')
        .optional()
        .isInt({ min: 0 })
        .withMessage('Duration must be a positive integer'),
];

export const updateSermonValidator = [
    body('title')
        .optional()
        .isString()
        .withMessage('Title must be a string')
        .isLength({ max: 255 })
        .withMessage('Title must not exceed 255 characters'),

    body('speaker')
        .optional()
        .isString()
        .withMessage('Speaker must be a string')
        .isLength({ max: 255 })
        .withMessage('Speaker must not exceed 255 characters'),

    body('description')
        .optional()
        .isString()
        .withMessage('Description must be a string'),

    body('date')
        .optional()
        .isISO8601()
        .withMessage('Date must be a valid ISO 8601 date'),

    body('bibleVerse')
        .optional()
        .isString()
        .withMessage('Bible verse must be a string'),

    body('category')
        .optional()
        .isString()
        .withMessage('Category must be a string'),

    body('thumbnail')
        .optional()
        .isString()
        .withMessage('Thumbnail must be a string'),

    body('videoUrl')
        .optional()
        .isURL()
        .withMessage('Video URL must be a valid URL'),

    body('audioUrl')
        .optional()
        .isURL()
        .withMessage('Audio URL must be a valid URL'),

    body('pdfUrl')
        .optional()
        .isURL()
        .withMessage('PDF URL must be a valid URL'),

    body('duration')
        .optional()
        .isInt({ min: 0 })
        .withMessage('Duration must be a positive integer'),
];