let mongoose=require('mongoose')

let cardSchema=new mongoose.Schema({
    cardNumber:String,
    cardType:{
        type:String,
        enum:["REGULAR","SPECIAL"]

    },
    customerName:String,
    status:{
        type:String,
        enum:["ACTIVE","INACTIVE"],
        default:"ACTIVE"
    },
    vision:String,
    customerID:{
        type:mongoose.Schema.Types.ObjectId,
        refer:"customerModel"

    }

    
})

module.exports=mongoose.model("cardmodel",cardSchema)