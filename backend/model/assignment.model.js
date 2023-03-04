const mongoose=require('mongoose')
const assignmentschema=mongoose.Schema({

    topic_name:String,
    assignment_date:String,
    assignment_time:String,
    teacher_name:String,
    assignment_id:String,
    assignment_type:String,
    course:String,
    userId:String

})
const AssignmentsModel=mongoose.model("assignment",assignmentschema)
module.exports={AssignmentsModel}