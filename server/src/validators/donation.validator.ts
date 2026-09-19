import { body } from 'express-validator';

export const donationValidator = [
    body('amount')
        .isNumeric()
        .withMessage('Amount must be a number.')
        .isFloat({ gt: 0 })
        .withMessage('Amount must be greater than zero.'),
    
    body('category')
        .isString()
        .withMessage('Category must be a string.')
        .notEmpty()
        .withMessage('Category is required.'),
    
    body('donorName')
        .optional()
        .isString()
        .withMessage('Donor name must be a string.'),
    
    body('donorEmail')
        .optional()
        .isEmail()
        .withMessage('Must be a valid email address.'),
    
    body('transactionId')
        .optional()
        .isString()
        .withMessage('Transaction ID must be a string.'),
    
    body('currency')
        .isString()
        .withMessage('Currency must be a string.')
        .notEmpty()
        .withMessage('Currency is required.'),
    
    body('paymentProvider')
        .isString()
        .withMessage('Payment provider must be a string.')
        .notEmpty()
        .withMessage('Payment provider is required.'),
];