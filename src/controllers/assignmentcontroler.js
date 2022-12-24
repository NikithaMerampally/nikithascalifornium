let bookmodel=require("../models/mybook")
let authorModel=require("../models/myauthor")
let publishermodel=require("../models/mypublisher")

let createAuthor=async function(req,res){
    let data=req.body;
    if(!data.includes("authorName")){
        res.send({msg:"enter authorname"})
    }else{
        let saveddata=await authorModel.create(data)
         res.send({author:saveddata});


    }

}

let getauthor=async function(req,res){
    let data=await authorModel.find()
    res.send({authordata:data})

}
let createpublisher=async function(req,res){
    let data=req.body;
    let saveddata=await publishermodel.create(data)
    res.send({author:saveddata});

}

let getpublisher=async function(req,res){
    let data=await publishermodel.find()

    if(data)
    res.send({authordata:data})

}
let createbook=async function(req,res){
    let data=req.body;
    let saveddata=await bookmodel.create(data)
    res.send({author:saveddata});

}

let getbook=async function(req,res){
    let data=await bookmodel.find()
    res.send({authordata:data})

}

//const getBooksWithAuthorDetails = async function (req, res) {
    //let specificBook = await bookModel.find().populate('author_id')
    //res.send({data: specificBook})

let bookswithalldetails=async function(req,res){
    let specificbook=await  bookmodel.find().populate("author").populate("publisher")
    res.send({data:specificbook})
}  

//put reqest(5)


let bookswithtrue=async function(req,res){
    let authbook=await bookmodel.find().populate('author').populate('publisher')
    let y=[]
    let e=[]
    authbook.forEach((x)=>{
        if((x['publisher']['name']=="rajesh" ) || (x['publisher']['name']=="ooo")||(x['publisher']['name']=="nn") ){
            y.push(x['name'])
        }
    })
        
   let m=await bookmodel.updateMany({name:{$in:y}},{$set:{isHardCover:true}},{new:true})
//    let k=await bookmodel.updateMany({name:{$in:e}},{$set:{$inc:{price:10}}},{new:true})
   let z=await bookmodel.find() 
   res.send({res:m})
   
 }
//res.send({data:specificbook[0]["author"]})


module.exports.createAuthor=createAuthor;
module.exports.getauthor=getauthor;
module.exports.createpublisher=createpublisher;
module.exports.getpublisher=getpublisher;
module.exports.createbook=createbook;
module.exports.getbook=getbook;
module.exports.bookswithalldetails=bookswithalldetails;
module.exports.bookswithtrue=bookswithtrue;
