
const router = require("express").Router();
const {topCourses,attendanceReport} = require("../controllers/adminController");
router.get("/top-courses",topCourses);
router.get("/attendance-report/:courseId",attendanceReport);
module.exports = router;
