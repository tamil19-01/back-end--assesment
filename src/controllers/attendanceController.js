
const Attendance = require("../models/Attendance");
const Enrollment = require("../models/Enrollment");
const asyncHandler = require("../middleware/asyncHandler");

exports.markAttendance = asyncHandler(async (req,res)=>{
 const {studentId,courseId,date,status} = req.body;
 const enr = await Enrollment.findOne({student:studentId,course:courseId,status:"active"});
 if(!enr) return res.status(400).json({msg:"Not active"});
 const exists = await Attendance.findOne({student:studentId,course:courseId,date});
 if(exists) return res.status(400).json({msg:"Already marked"});
 const a = await Attendance.create({student:studentId,course:courseId,date,status});
 res.status(201).json(a);
});
