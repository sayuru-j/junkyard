const express = require("express");
const { getCollection, addCollection, getCollectionByID, updateCollection, deleteCollection } = require("../controllers/collectionController");
const router = express.Router();

router.route("/").get(getCollection)
router.route("/add").post(addCollection)
router.route("/:id").get(getCollectionByID).put(updateCollection).delete(deleteCollection)


module.exports = router;