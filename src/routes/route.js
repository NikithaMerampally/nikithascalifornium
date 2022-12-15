const express = require('express');

const router = express.Router();
const userModels=require("../models/userModel")



router.post("/createUser",function(req,res){
    let data=req.body
    let savedData=userModels.create(data)
    res.send({msg:savedData})
})




module.exports = router;