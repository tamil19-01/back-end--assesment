
const mongoose = require("mongoose");
const schema = new mongoose.Schema({
 name:{type:String,required:true},
 email:{type:String,unique:true},
 phone:String,
 enrolledCourses:[{type:mongoose.Schema.Types.ObjectId,ref:"Course"}],
 createdAt:{type:Date,default:Date.now}
});
module.exports = mongoose.model("Student",schema);
