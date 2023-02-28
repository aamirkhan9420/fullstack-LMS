const express = require("express")
let { UserListModel } = require("../model/userList.model")


let { ApplicationModel } = require("../model/application.model")


const applicationtRoute = express.Router()

//-------------------------Application-------------------------------//
// --------create application -----//

applicationtRoute.post("/createapplication", async (req, res) => {
    let { name, email,state,course,coursetime, index,userId} = req.body

    //----check if applicant  is already exist or not----//
    let isUserIdPresent = await UserListModel.findOne({ email: email })
    if (isUserIdPresent) {
        res.send({ "msg": "student already persuing course" })
    } else {
        try {
              let isPresent=await ApplicationModel.findOne({email: email})
              if(isPresent){
        res.send({ "msg": " You can apply for one course at a time " })

              }else{
                 let newApplicant = new ApplicationModel({name, email,state,course,coursetime, userId ,index})
            await newApplicant.save()
            res.send({ "msg": "Application submited successfully " })
              }
           
        } catch (error) {
            res.send({ "msg": error })
        }
    }
})

// --------get Application list -----//
applicationtRoute.get("/getapplicationlist", async (req, res) => {

    try {
        let applicants = await ApplicationModel.find()

        res.send({ "msg": applicants })
    } catch (error) {
        res.send({ "msg": error })
    }
})

// --------Delete student -----//
applicationtRoute.delete("/removeapplicant/:id", async (req, res) => {

    let id = req.params.id
       try {
             await ApplicationModel.findByIdAndDelete({ _id: id })
         
            res.send({ "msg": `rejected` })
        
    } catch (error) {
        res.send({ "msg": error })
    }
})
module.exports={applicationtRoute}