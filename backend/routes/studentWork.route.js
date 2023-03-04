const express = require("express")
let { UserListModel } = require("../model/userList.model")
let { LectureModel } = require("../model/lecture.model")
let { AssignmentsModel } = require("../model/assignment.model")


const studentWork = express.Router()
// --------get Lectures list---------//

studentWork.get("/lectures", async (req, res) => {
    let {userId}=req.body
       let student=await UserListModel.findOne({student_userId:userId})
      
 
    try {
        let lectures = await LectureModel.find({course:student.course})

        res.send({ "msg": lectures })
    } catch (error) {
        res.send({ "msg": error })
    }
})

// --------get assignments list -----//
studentWork.get("/assignment", async (req, res) => {
    let {userId}=req.body
       let student=await UserListModel.findOne({student_userId:userId})

    try {
        let assignment = await AssignmentsModel.find({course:student.course})

        res.send({"msg": assignment })
    } catch (error) {
        res.send({ "msg": error })
    }
})

module.exports = { studentWork }
