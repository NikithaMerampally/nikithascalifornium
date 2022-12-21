let cardmodel=require('../model/cartmodel.js');
let customermodel=require("../model/customermodel.js")

let cardpost=async function(req,res){
    let data=req.body;
    let savedData=await cardmodel.create(data);
    res.send({msg:savedData})
}

let getcard=async function(req,res){
    let data=await cardmodel.find()
    res.send({msg:data})

}

let customerpost=async function(req,res){
    let data=req.body;
    let savedData=await customermodel.create(data);
    res.send({msg:savedData})
}
let getcustomer=async function(req,res){
    let data=await customermodel.find()
    res.send({msg:data})
}


module.exports.cardpost=cardpost;
module.exports.getcard=getcard;
module.exports.customerpost=customerpost;
module.exports.getcustomer=getcustomer;





