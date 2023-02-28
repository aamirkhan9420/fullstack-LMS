const mongoose=require('mongoose')
const blockListschema=mongoose.Schema({
    name:String,
    student_id:String,
    image:String,
    email:String,
    state:String,
    course:String,
    coursetime:String,
    userId:String,
})
const BlockListModel=mongoose.model("blockstudent",blockListschema)
module.exports={BlockListModel}