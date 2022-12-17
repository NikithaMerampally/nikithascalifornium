let Puser=require("../models/Puser");



let userCreate=async function(req,res){
    let data=req.data;
    let savedData=await Puser.create(data);
    res.send({msg:savedData});

}

let userget=async function(req,res){
    let allUserData=await Puser.find();
    res.send({msg:allUserData});
}

module.exports.userCreate=userCreate;
module.exports.userget=userget;

