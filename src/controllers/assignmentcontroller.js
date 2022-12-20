let bookmodel=require('../models/assignmentbook');
let authormodel=require("../models/assignmentauthor");

 let createBooks=async function(req,res){
    let data=req.body;
    let savedData=await bookmodel.create(data);
    res.send({msg:savedData})//books create
 }

 let getbooks=async function(req,res){
    let allbooks=await bookmodel.find();
    res.send({msg:allbooks})//books get
 }

 let createauthor=async function(req,res){
    let data=req.body;
    let savedData=await authormodel.create(data);
    res.send({msg:savedData})

 }

 let getauthor=async function(req,res){
    let allauthors=await authormodel.find();
    res.send({msg:allauthors})
 }

 let booksbychetan=async function(req,res){
    let chetanbhagat=await authormodel.find({author_name:"Chetan Bhagat"}).select({ author_id:1,_id:0})
    let authorId=chetanbhagat[0]["author_id"];
    let allbooksbyauthor= await bookmodel.find({author_id:authorId});
    res.send({allbooks:allbooksbyauthor})
    
 }

 let authorofbook=async function(req,res){
    let author=await bookmodel.find({name:"Two states"}).select( {author_id:1,_id:0,price:1} )
    let author_id=author[0]["author_id"];
    let author_name=await authormodel.find({author_id:author_id}).select({author_name:1,_id:0});
    
     let allbooks= await bookmodel.findOneAndUpdate( 
        { name: "Two states"} , //condition
        { $set:{price:100}}, //update in data
        { new: true } //
    ).select({price:1,_id:0})
    let array=[]
    
    array.push(author_name[0]["author_name"]);
    array.push(allbooks["price"]);

    res.send(array);

 


 }
 const bookRange=async function(req,res){
   let a=await bookmodel.find({price:{$gte:50,$lte:100}}).select({author_id:1,_id:0})
   // res.send(a)
   let ar=[]
   for(let i=0;i<a.length;i++){
       if(!ar.includes(a[i]['author_id']))
    ar.push(a[i]['author_id'])
   }
   console.log(ar)
   let resul=[]
   let b=await authormodel.find().select({_id:0,author_id:1,author_name:1})
   b.forEach((x)=>{
       if(ar.includes(x['author_id'])){
           resul.push(x['author_name'])
       }
   })
  
   res.send({authors:resul})
}


 //costs between 50-100(50,100 inclusive) and respond back with the author names of respective books.. 
// bookModel.find( { price : { $gte: 50}  ,  price: {$lte: 100} } ) // WRONG
// bookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1})..run a map(or forEach) loop and get all the authorName corresponding to the authorId’s ( by querying authorModel)



 module.exports.createBooks=createBooks;
 module.exports.getbooks=getbooks;
 module.exports.createauthor=createauthor;
 module.exports.getauthor=getauthor;
 module.exports.booksbychetan=booksbychetan;
 module.exports.authorofbook=authorofbook;
 module.exports.bookRange=bookRange;



