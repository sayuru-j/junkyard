const express = require('express')

const router = express.Router()

// Import validators
const { userSignupValidator } = require('../validators/auth')
const { runValidation } = require('../validators')

// Import from controllers
const { signup } = require('../controllers/auth')

// The data to send after hitting endpoint
router.post('/register', userSignupValidator, runValidation, signup)


// module.exports is a special object that makes this module available to other modules
module.exports = router;