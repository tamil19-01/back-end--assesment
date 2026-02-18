
const router = require("express").Router();
const {markAttendance} = require("../controllers/attendanceController");
router.post("/",markAttendance);
module.exports = router;
