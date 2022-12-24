const usermodel=require("../models/usersmodel")
const productModel=require("../models/productmodel")
const orderModel=require("../models/ordermodel");


let createUser=async function(req,res){
    let data=req.body;
    let saveddata= await usermodel.create(data)
    res.send({msg:saveddata})
}
let getuser=async function(req,res){
    let data=await usermodel.find();
    res.send({msg:data})

}

let createproduct=async function(req,res){
    let data=req.body;
    let saveddata=await productModel.create(data)
    res.send({msg:saveddata})
}
let getproduct=async function(req,res){
    let data=await productModel.find();
    res.send({msg:data})

}


let createorder=async function(req,res){
    let validuseranduserbalance=await usermodel.findById(req.body["userId"]).select({"balance":1,_id:0});//in this i have validated user as well as i find the balance
     
    let validproductandprice=await productModel.findById(req.body["productId"]).select({"price":1,_id:0});
    let updateprice=validuseranduserbalance["balance"]-validproductandprice["price"];
    updateprice=-5
    let isfreeheck=req.body["isFreeAppUser"];
    if(validuseranduserbalance && validproductandprice){
    if(!(isfreeheck===false)){
        if(updateprice<0){
            res.send({msg:"your balance is:"+updateprice+ "you dont have sufficient balance"})
        }else {
            // res.send({msg:"you dont have sufficient balance"})
            let updateuser=await usermodel.updateOne(
                {isFreeAppUser:false},
                {balance:updateprice}
                )
            let data=req.body
            let savedData=await orderModel.create(data);
            res.send({msg:savedData})
            

        }
        
   
     
    }else{
        
        let data=req.body
        data["amount"]=0
        data["isFreeAppUser"]=true
        let savedData=await orderModel.create(data);
        res.send({msg:savedData})
    
    }
}else{
    res.send({msg:"enter a valid user and valid product id"})
}


    
    
    
    


    
}
//get order and update



module.exports.createUser=createUser;
module.exports.createproduct=createproduct;
module.exports.createorder=createorder;
module.exports. getuser= getuser;
module.exports.getproduct=getproduct


