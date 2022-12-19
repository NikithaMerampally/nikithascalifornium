let booksModel=require('../models/booksModel');


let createbooks=async function(req,res){
    let data=req.body
    let savedData= await booksModel.create(data);
    res.send({msg:savedData})
}

let getbooks=async function(req,res){
    // let years=req.query.year
    // let allbooksdata= await booksModel.find().select( {bookName:1,authorName:1,_id:0} )
    // //.find({year:{$eq:years}})//get books of that particualr year
    
// let names=req.query.name
// let allbooksdata=await booksModel.find( {bookName:/.*intro.*/i} )
//     res.send({msg:allbooksdata})//books with name intro

// let year=req.query.year;
// let author=req.query.authorName;
// let allbooksdata=await booksModel.find({year:{$eq:year}},{authorName:{$eq:author}}).select({bookName:1,authorName:1,year:1,_id:0})//year 
// console.log(author)
// res.send({msg:allbooksdata});//getparticularbooks

// let allbooksdata=await booksModel.find({$or:[{"price.indianPrice":"INR100"},{"price.indianPrice":"INR200"},{"price.indianPrice":"INR500"}]})
// .select({"price.indianPrice":1,bookName:1,authorName:1})
// res.send({msg:allbooksdata})
// }
let allbooksdata=await booksModel.find({$or:[{totalPages:{$gt:500}},{stockAvailable:true}]}).select({totalPages:1,stockAvailable:1})
res.send({msg:allbooksdata})// all books with pages greater than 500 or isavaialble
}





module.exports.createbooks=createbooks;
module.exports.getbooks=getbooks;
