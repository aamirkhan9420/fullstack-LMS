const mongoose=require('mongoose')
const applicationschema=mongoose.Schema({
    name:String,
    email:String,
    state:String,
    course:String,
    coursetime:String,
    userId:String,

})
const ApplicationModel=mongoose.model("application",applicationschema)
module.exports={ApplicationModel}