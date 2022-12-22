let mongoose=require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

let bookSchema=new mongoose.Schema({
    name:String,
	author:{
        type:ObjectId,
        ref:"myauthor",
        required:true
    },
	price:Number,
	ratings:Number,
	publisher: {
        type:ObjectId,
        ref:"mypublisher",
        required:true

    }


},{timestamps:true})

module.exports=mongoose.model("mybook",bookSchema)