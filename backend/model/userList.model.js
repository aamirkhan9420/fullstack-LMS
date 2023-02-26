const mongoose=require('mongoose')
const userListschema=mongoose.Schema({
    name:String,
    student_id:String,
    image:String,
    email:String,
    state:String,
    course:String,
    coursetime:String,
    userId:String,
})
const UserListModel=mongoose.model("adminwork",userListschema)
module.exports={UserListModel}