
const router = require("express").Router();
const {enrollStudent} = require("../controllers/enrollmentController");
router.post("/",enrollStudent);
module.exports = router;
