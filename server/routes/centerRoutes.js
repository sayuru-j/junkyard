const express = require("express");
const router = express.Router();

// import validators
const { addNewCenterValidator } = require("../validators/centerValidator");
const { runValidation } = require("../validators");

// import controllers
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
router.route("/:id").get(viewCenterById).put(editCenter).delete(deleteCenter);

module.exports = router;
