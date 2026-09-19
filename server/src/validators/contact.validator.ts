import { body } from 'express-validator';

export const contactValidator = [
    body('name')
        .notEmpty()
        .withMessage('Name is required.')
        .isString()
        .withMessage('Name must be a string.')
        .trim(),
    
    body('email')
        .notEmpty()
        .withMessage('Email is required.')
        .isEmail()
        .withMessage('Email must be a valid email address.')
        .normalizeEmail(),
    
    body('phone')
        .optional()
        .isString()
        .withMessage('Phone must be a string.')
        .trim(),
    
    body('subject')
        .notEmpty()
        .withMessage('Subject is required.')
        .isString()
        .withMessage('Subject must be a string.')
        .trim(),
    
    body('message')
        .notEmpty()
        .withMessage('Message is required.')
        .isString()
        .withMessage('Message must be a string.')
        .trim()
        .isLength({ min: 10 })
        .withMessage('Message must be at least 10 characters long.')
];