
const Enrollment = require("../models/Enrollment");
const Attendance = require("../models/Attendance");
const mongoose = require("mongoose");
const asyncHandler = require("../middleware/asyncHandler");

exports.topCourses = asyncHandler(async (req,res)=>{
 const data = await Enrollment.aggregate([
  {$group:{_id:"$course",totalStudents:{$sum:1}}},
  {$lookup:{from:"courses",localField:"_id",foreignField:"_id",as:"course"}},
  {$unwind:"$course"},
  {$project:{title:"$course.title",totalStudents:1,totalRevenue:{$multiply:["$totalStudents","$course.fee"]}}},
  {$sort:{totalStudents:-1}},
  {$limit:3}
 ]);
 res.json(data);
});

exports.attendanceReport = asyncHandler(async (req,res)=>{
 const courseId = new mongoose.Types.ObjectId(req.params.courseId);
 const data = await Attendance.aggregate([
  {$match:{course:courseId}},
  {$group:{_id:"$student",totalClasses:{$sum:1},presentDays:{$sum:{$cond:[{$eq:["$status","present"]},1,0]}}}},
  {$lookup:{from:"students",localField:"_id",foreignField:"_id",as:"student"}},
  {$unwind:"$student"},
  {$project:{studentName:"$student.name",totalClasses:1,presentDays:1,attendancePercentage:{$multiply:[{$divide:["$presentDays","$totalClasses"]},100]}}}
 ]);
 res.json(data);
});
