import { body } from 'express-validator';

const emailBodyValidator = [
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Email is invalid')
    .isLength({ min: 4, max: 255 })
    .withMessage('Email must be between 4 and 255 chars'),
  body('subject')
    .trim()
    .notEmpty()
    .withMessage('Subjetct is required')
    .isLength({ min: 4, max: 255 })
    .withMessage('Subjetct must be between 4 and 255 chars'),
  body('text')
    .trim()
    .notEmpty()
    .withMessage('Text is required')
    .isLength({ min: 4, max: 255 })
    .withMessage('Text must be between 4 and 255 chars'),
  body('html')
    .trim()
    .notEmpty()
    .withMessage('Html is required')
    .isLength({ min: 4, max: 255 })
    .withMessage('Html must be between 4 and 255 chars'),
];

export default emailBodyValidator;
