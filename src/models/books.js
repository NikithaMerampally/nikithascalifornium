const mongoose=require('mongoose');
const bookSchema=new mongoose.Schema({
    bookName:String,
    authouName:String,
    category:String,
    year:Number,
    tags:[String,String],
    date:Date,
    sales:{
        type:Number,
        default:10
    }

},{ timestamps: true });


module.exports=mongoose.model("bookSchema",bookSchema);

