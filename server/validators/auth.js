const { check } = require('express-validator')

exports.userSignupValidator = [
    check('name')
        .not()
        .isEmpty()
        .withMessage('Name is required'),
    
    check('username')
        .not()
        .isEmpty()
        .isLength({ min: 6 })
        .isAlphanumeric()
        .withMessage('Username must be 6 chatacters long, unique and alphanumeric'),
    
    check('email')
        .isEmail()
        .withMessage('Email is required'),

    check('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long')
]

exports.userLoginValidator = [
    check('email')
        .isEmail()
        .withMessage('• Email is required'),
    check('password')
        .isLength({ min:6 })
        .withMessage('Password must be at least 6 characters long')
]