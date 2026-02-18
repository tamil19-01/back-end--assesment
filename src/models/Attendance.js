
const mongoose = require("mongoose");
const schema = new mongoose.Schema({
 student:{type:mongoose.Schema.Types.ObjectId,ref:"Student"},
 course:{type:mongoose.Schema.Types.ObjectId,ref:"Course"},
 date:{type:Date,required:true},
 status:{type:String,enum:["present","absent"]}
});
schema.index({student:1,course:1,date:1},{unique:true});
module.exports = mongoose.model("Attendance",schema);
