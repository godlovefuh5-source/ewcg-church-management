import { body } from 'express-validator';

export const createMinistryValidator = [
  body('name')
    .notEmpty()
    .withMessage('Ministry name is required.')
    .isString()
    .withMessage('Ministry name must be a string.'),
  
  body('description')
    .optional()
    .isString()
    .withMessage('Description must be a string.'),
  
  body('leaderId')
    .notEmpty()
    .withMessage('Leader ID is required.')
    .isUUID()
    .withMessage('Leader ID must be a valid UUID.'),
  
  body('meetingSchedule')
    .optional()
    .isString()
    .withMessage('Meeting schedule must be a string.'),
  
  body('contactInfo')
    .optional()
    .isString()
    .withMessage('Contact information must be a string.'),
  
  body('activities')
    .optional()
    .isArray()
    .withMessage('Activities must be an array.'),
  
  body('gallery')
    .optional()
    .isArray()
    .withMessage('Gallery must be an array of image URLs.'),
];