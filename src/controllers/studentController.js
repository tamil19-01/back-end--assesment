
const Student = require("../models/Student");
const asyncHandler = require("../middleware/asyncHandler");

exports.createStudent = asyncHandler(async (req,res)=>{
 const s = await Student.create(req.body);
 res.status(201).json(s);
});

exports.getStudents = asyncHandler(async (req,res)=>{
 const data = await Student.find().populate("enrolledCourses","title fee");
 res.json(data);
});
