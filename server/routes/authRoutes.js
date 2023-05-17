const express = require("express");

const router = express.Router();

// Import validators
const {
  userSignupValidator,
  userLoginValidator,
} = require("../validators/authValidator");
const { runValidation } = require("../validators");

// Import from controllers
const { signup, login } = require("../controllers/auth");

// The data to send after hitting endpoint
router.post("/register", userSignupValidator, runValidation, signup);
router.post("/login", userLoginValidator, runValidation, login);

// module.exports is a special object that makes this module available to other modules
module.exports = router;
