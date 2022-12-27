
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
    let userToBeModified = req.params["userId"]
    // //userId for the logged-in user
    let userLoggedIn = verifiedtoken["userId"]
    console.log(userLoggedIn)g

    // //userId comparision to check if the logged-in user is requesting for their own data
    if((userToBeModified != userLoggedIn)) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})
     next()
} 


module.exports.mid1=mid1;