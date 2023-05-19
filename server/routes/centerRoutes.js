const express = require("express");
const router = express.Router();

// import validators
const { addNewCenterValidator, updateCenterValidator} = require("../validators/centerValidator");
const { runValidation } = require("../validators");

// Import controllers
const {
  addCenter,
  viewCenter,
  deleteCenter,
  viewCenterById,
  editCenter,
} = require("../controllers/centerController");

// Endpoints
router.route("/addnewcenter").post(addNewCenterValidator, runValidation, addCenter);
router.route("/").get(viewCenter);
router.route("/:id").get(viewCenterById).put(updateCenterValidator, runValidation , editCenter).delete(deleteCenter);

module.exports = router;
