const { body, validationResult } = require('express-validator');

const validateUser = [
  body('username').isAlphanumeric().isLength({ min: 3, max: 30 }),
  body('email').isEmail(),
  body('ipaddress').isIP(),
  body('firstName').isLength({ max: 50 }),
  body('lastName').isLength({ max: 50 }),
  body('favoriteColor').optional().isLength({ max: 20 }),
  body('birthday').isISO8601(),
];

module.exports = validateUser;