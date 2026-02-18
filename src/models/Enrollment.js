
const mongoose = require("mongoose");
const schema = new mongoose.Schema({
 student:{type:mongoose.Schema.Types.ObjectId,ref:"Student"},
 course:{type:mongoose.Schema.Types.ObjectId,ref:"Course"},
 enrolledOn:{type:Date,default:Date.now},
 status:{type:String,enum:["active","completed","dropped"],default:"active"}
});
schema.index({student:1,course:1},{unique:true});
module.exports = mongoose.model("Enrollment",schema);
