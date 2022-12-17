const mongoose=require("mongoose");
const { stringify } = require("querystring");
const userSchema=new mongoose.Schema( {
    firstName:String,
    lastName:String,
    age:Number,
    email:String,
    mobile:{
        type:String,
        unique:true
    }
   
   
    
},{timestamps:true});

module.exports=mongoose.model("userPractice",userSchema) 
