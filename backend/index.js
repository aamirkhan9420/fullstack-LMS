const express=require("express")
const {connection} =require("./confige/db")
const app=express()
require("dotenv").config()
app.use(express.json())
let cors=require("cors")
const { adminRouter } = require("./routes/admin.route")
const { adminWork } = require("./routes/adminWork.route")
const { authentication } = require("./middleware/authentication")
const { studentRouter } = require("./routes/student.route")
app.use(cors({
    origin:"*"
}))

let PORT=process.env.PORT

app.get("/",(req,res)=>{
    res.send("welcome to home")
})
// ------admin----//
app.use("/student",studentRouter)
app.use("/admin",adminRouter)
app.use(authentication)
app.use("/adminwork",adminWork)


app.listen(PORT,async(req,res)=>{
    
    try {
        await connection
        console.log(`listening on port ${PORT}`)
    } catch (error) {
        console.log("err while connecting")
    }
})