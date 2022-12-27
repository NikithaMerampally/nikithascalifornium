const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const mongoose=require('mongoose')

let createuser=async function(req,res){
    let data=req.body
    let savedData=await userModel.create(data);
    res.send({msg:savedData})


}

let logindata=async function(req,res){
    
    let password=req.body["password"];
    let username1= await userModel.findOne({userName:req.body["userName"]});
    if(!username1){
        res.send({status:false,msg:"user is invalid"});
    }
    
    //if my user details are correct now in response i will generate a jwt 

    let token=jwt.sign({userId:username1["_id"].toString()},"verysecretkey");
    
    res.setHeader("x-auth-token", token);
    res.send({status:true,token:token})


}

let getuser=async function(req,res){
    
    let userId=mongoose.Types.ObjectId(req.params["userId"])
    console.log(userId)
    
    let user = await userModel.findById(userId);
    console.log(user)
    
    if(!user){
        return res.send({status:false,msg:"no such user exists"})
    }
    res.send({msg:user})

}

let updateuser=async function(req,res){
     //main logic 
     let userIdd=mongoose.Types.ObjectId(req.params.userIdd)
    console.log(userIdd)
    
    let user = await userModel.findOneAndUpdate({userName:userIdd},{$set:{password:"nikitha123"}});
    
    if(!user){
        return res.send({status:false,msg:"no such user exists"})
    }
    res.send({send:user})
}

let DeleteUser=async function(req,res){
    //main logic 
    let userIddd=mongoose.Types.ObjectId(req.params.userIddd)
    console.log(userIddd)
    
    let user = await userModel.findOneAndUpdate({userName:userIddd},
        {$set:{isDeleted:true}},{upsert:true});
    
    if(!user){
        res.send({status:false,msg:"no such user exists"})
    }
    res.send({msg:user})

}


module.exports.createuser=createuser;
module.exports.logindata=logindata;
module.exports.getuser=getuser;
module.exports.updateuser=updateuser;
module.exports.DeleteUser=DeleteUser