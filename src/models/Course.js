
const mongoose = require("mongoose");
const schema = new mongoose.Schema({
 title:{type:String,required:true},
 duration:Number,
 fee:Number,
 instructor:String,
 createdAt:{type:Date,default:Date.now}
});
module.exports = mongoose.model("Course",schema);
