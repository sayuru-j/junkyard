const { addVehicle, getVehicle, updateVehicle, getVehicleById, deleteVehicle } = require("../controllers/vehicle");

const router = require("express").Router();


router.route("/add").post(addVehicle);
router.route("/").get(getVehicle);

// http//Localhost:8070/student/update/klmklnjlnjlnkjln

router.route("/update/:id").put(updateVehicle)

// http//Localhost:8070/student/delete/klmklnjlnjlnkjln

router.route("/delete/:id").delete(deleteVehicle)

router.route("/get/:id").get(getVehicleById)
  
module.exports = router;