
const Enrollment = require("../models/Enrollment");
const Student = require("../models/Student");
const Course = require("../models/Course");
const asyncHandler = require("../middleware/asyncHandler");

exports.enrollStudent = asyncHandler(async (req,res)=>{
 const {studentId,courseId} = req.body;
 const student = await Student.findById(studentId);
 if(!student) return res.status(404).json({msg:"Student not found"});
 const course = await Course.findById(courseId);
 if(!course) return res.status(404).json({msg:"Course not found"});
 const exists = await Enrollment.findOne({student:studentId,course:courseId});
 if(exists) return res.status(400).json({msg:"Already enrolled"});
 const enrollment = await Enrollment.create({student:studentId,course:courseId});
 student.enrolledCourses.push(courseId);
 await student.save();
 res.status(201).json(enrollment);
});
