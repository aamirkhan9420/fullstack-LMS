const mongoose=require('mongoose')
const studentschema=mongoose.Schema({
    name:String,
    email:String,
    password:String,
    state:String
})
const StudentModel=mongoose.model("student",studentschema)
module.exports={StudentModel}