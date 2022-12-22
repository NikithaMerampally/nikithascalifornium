let mongoose=require('mongoose')
let publisherSchema=new mongoose.Schema({

    name:String,
    headQuarters:String

},{timestamps:true})


module.exports=mongoose.model("mypublisher",publisherSchema);
