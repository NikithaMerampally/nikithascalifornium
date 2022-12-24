let mongoose=require('mongoose')

let productSchema=new mongoose.Schema({
    name:String,
	category:String,
	price:{
        type:Number,
        required:true
    } //mandatory property
},{timestamps:true})


module.exports=mongoose.model("myproductdeatl",productSchema);