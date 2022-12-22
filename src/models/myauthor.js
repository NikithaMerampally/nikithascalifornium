let mongoose=require('mongoose')
let authorSchema=new mongoose.Schema({
    
    authorName:String,
    age:Number,
    address:String,
    rating: Number

});

module.exports=mongoose.model("myauthor",authorSchema);


