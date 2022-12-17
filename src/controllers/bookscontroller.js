let books=require("../models/books.js")


let createbooks=async function(req,res){
    let data=req.body;
    let savedData=await books.create(data)
    res.send({msg:savedData})
}

let getbooks=async function(req,res){
    //let booksdata=await books.find().select({bookName:1,authouName:1,_id:0});
    let booksdata=await books.find();
    res.send({msg:booksdata})
}

module.exports.createbooks=createbooks;
module.exports.getbooks=getbooks;

