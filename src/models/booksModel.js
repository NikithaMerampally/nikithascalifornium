const mongoose=require('mongoose');
//Create a books collection in your DB ( using bookModel with following fields)- bookName( mandatory field), 
//price containing Indian and european price, year ( should be 2021 if no year is provided) , 
//tags array, authorName, totalPages , stockAvailable ( true false)
const bookSchema=new mongoose.Schema({
    bookName:{
        type:String,
        required:true
    },
    price:{
        indianPrice:String,
        europeanPrice:String
    },
    year:{
        type:Number,
        default:2021
    },
    tags:[String],
    authorName:String,
    totalPages:Number,
    stockAvailable:{
        type:String,
        enum:[true,false]
    }
},{ timestamps: true });


module.exports=mongoose.model("bookcollection",bookSchema);
