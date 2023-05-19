const { addSchedule, getSchedule, updateSchedule, getScheduleById, deleteSchedule } = require("../controllers/schedule");

const router = require("express").Router();


router.route("/add").post(addSchedule);
router.route("/").get(getSchedule);

// http//Localhost:8070/student/update/klmklnjlnjlnkjln

router.route("/update/:id").put(updateSchedule)

// http//Localhost:8070/student/delete/klmklnjlnjlnkjln

router.route("/delete/:id").delete(deleteSchedule)

router.route("/get/:id").get(getScheduleById)
  
module.exports = router;