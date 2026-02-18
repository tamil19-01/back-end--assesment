
const Course = require("../models/Course");
const asyncHandler = require("../middleware/asyncHandler");
exports.createCourse = asyncHandler(async (req,res)=>{
 const c = await Course.create(req.body);
 res.status(201).json(c);
});
