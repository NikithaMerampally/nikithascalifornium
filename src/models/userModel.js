const mangoose=require('mangoose');

const userSchema=new mangoose.Schema({
    firstName:string,
    lastName:string,
    mobileNUmber:{
        type:string,
        required:true,
        unique:true
    },
    age:Number,
    gender:{
        type:string,
        enum:["male","femle","LGBT"]
    }

},{timestamps:true});

module.exports=mangoose.model('User',userSchema)//users
