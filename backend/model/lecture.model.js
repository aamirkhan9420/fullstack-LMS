const mongoose=require('mongoose')
const lectureschema=mongoose.Schema({

    topic_name:String,
    lecture_date:String,
    lecture_time:String,
    teacher_name:String,
    lecture_id:String,
    lecture_type:String,
    course:String,
    userId:String

})
const LectureModel=mongoose.model("lecture",lectureschema)
module.exports={LectureModel}