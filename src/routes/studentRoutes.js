
const router = require("express").Router();
const {createStudent,getStudents} = require("../controllers/studentController");
router.post("/",createStudent);
router.get("/",getStudents);
module.exports = router;
