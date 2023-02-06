let jwt=require("jsonwebtoken")
require("dotenv").config()

let authentication=(req,res,next)=>{
    let token=req.headers?.authorization?.split(" ")[1]
    if(token){
        let decoded=jwt.verify(token,process.env.KEY)
        if(decoded){
            
            req.body.userId=decoded.userId
            next()
          }  else{
                res.send({"msg":"user not authorized"})
            }
         }
          else{
            
            res.send({"msg":"user not authorized"})

   }
}

module.exports={authentication}