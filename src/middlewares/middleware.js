
let jwt=require('jsonwebtoken')
let mid1= function(req,res,next){
    let token=req.headers["x-auth-token"] 
    if(!token){
        res.send({status:false,msg:"it must contain header"})
    }
    //if token is present then verify the token
    let verifiedtoken= jwt.verify(token,"verysecretkey")
    
    if(!verifiedtoken){
        res.send({msg:"token is mismatched"})
    }
    console.log(verifiedtoken)
    next()
} 


module.exports.mid1=mid1;