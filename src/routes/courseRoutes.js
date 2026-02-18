
const router = require("express").Router();
const {createCourse} = require("../controllers/courseController");
router.post("/",createCourse);
module.exports = router;
