import { body } from 'express-validator';

export const galleryValidator = [
    body('title')
        .notEmpty()
        .withMessage('Title is required')
        .isString()
        .withMessage('Title must be a string')
        .isLength({ max: 100 })
        .withMessage('Title must not exceed 100 characters'),

    body('description')
        .optional()
        .isString()
        .withMessage('Description must be a string')
        .isLength({ max: 500 })
        .withMessage('Description must not exceed 500 characters'),

    body('image')
        .notEmpty()
        .withMessage('Image URL is required')
        .isURL()
        .withMessage('Image must be a valid URL'),

    body('category')
        .optional()
        .isString()
        .withMessage('Category must be a string')
        .isLength({ max: 50 })
        .withMessage('Category must not exceed 50 characters'),
];