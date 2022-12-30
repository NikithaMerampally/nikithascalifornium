const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const mongoose=require('mongoose')

let createuser=async function(req,res){
  try{
    let data=req.body
    let savedData=await userModel.create(data);
    res.send({msg:savedData})
}

catch(error){
  res.status(404).send(error.message)
}
}

let logindata=async function(req,res){
    
    let username1= await userModel.findOne({userName:req.body["userName"]},{password:req.body["password"]});
    if(!username1){
        res.send({status:false,msg:"user is invalid"});
    } 
  
    //if my user details are correct now in response i will generate a jwt
    let token=jwt.sign({userId:(username1["_id"].toString())},"verysecretkey");
    res.send({status:true,token:token})


}

let getuser=async function(req,res){ 
  try{
    let id=req.params["userId"]
    
    let userId=mongoose.Types.ObjectId(id)
    //console.log(userId)
    
    let user = await userModel.findById(userId);
    console.log(user)
    
    if(user){
        res.send({msg:user})    
    }
    res.status(404).send("user does not exists")
  }catch(error){
    res.send(error.msg)

  }
}
    

let updateuser=async function(req,res){
     //main logic 
     let userId=mongoose.Types.ObjectId(req.params.userId)
    console.log(userId)
    
    let user = await userModel.findOneAndUpdate({_id:userId},{$set:{password:"nikitha123"}},{new:true});
    
    if(!user){
        return res.send({status:false,msg:"no such user exists"})
    }
    res.send({send:user})
}

let DeleteUser=async function(req,res){
    //main logic 
    
    let userId=mongoose.Types.ObjectId(req.params.userId)
    console.log(userId)
    
    let user = await userModel.findOneAndUpdate({_id:userId},
        {$set:{isDeleted:true}},{new:true});
    
    if(!user){
        res.send({status:false,msg:"no such user exists"})
    }
    res.send({msg:user})

}



module.exports.createuser=createuser;
module.exports.logindata=logindata;
module.exports.getuser=getuser;
module.exports.updateuser=updateuser;
module.exports.DeleteUser=DeleteUser;