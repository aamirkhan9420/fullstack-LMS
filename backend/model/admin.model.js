const mongoose=require('mongoose')
const adminschema=mongoose.Schema({
    name:String,
    email:String,
    password:String,
    state:String
})
const AdminModel=mongoose.model("admin",adminschema)
module.exports={AdminModel}