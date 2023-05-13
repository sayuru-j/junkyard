const { check } = require('express-validator')

exports.addNewCenterValidator = [
    check('center_Id')
        .not()
        .isEmpty()
        .isLength({ min: 6, max: 10})
        .withMessage('Center Id must be between 6 and 10 characters'),
    
    check('center_Name')
        .not()
        .isEmpty()
        .withMessage('Center Name is required'),

    check('address')
        .not()
        .isEmpty()
        .withMessage('Address is required'),

    check('supervisor')
        .not()
        .isEmpty()
        .withMessage('Supervisor Name is required'),

    check('phone_No')
        .isNumeric()
        .withMessage('Phone Number is required'),

    check('email')
        .isEmail()
        .withMessage('Email is required'),
    
    check('operating_Hours')
        .not()
        .isEmpty()
        .isLength({ min: 3 })
        .withMessage('Operating Hours is required'),

    check('accepted_Materials')
        .not()
        .isEmpty()
        .withMessage('Select at least one accepted materials'),

    check('photo_Url')
        .not()
        .isEmpty()
        .withMessage('Photo is required'),

    check('services_Offered')
        .not()
        .isEmpty()
        .isLength({ max: 100})
        .withMessage('Address cannot be exceed 100 characters')
]