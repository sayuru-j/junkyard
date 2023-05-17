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

// hitpoint
router.post("/addnewcenter", addNewCenterValidator, runValidation, addCenter);
router.get("/centers", viewCenter);
router.delete("/centers/:id", deleteCenter);
router.get("/centers/:id", viewCenterById);
router.put("/editcenter", editCenter);

module.exports = router;
