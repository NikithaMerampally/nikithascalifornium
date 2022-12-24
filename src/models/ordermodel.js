let mongoose=require('mongoose')
let type=mongoose.Schema.Types.ObjectId

let orderSchema=new mongoose.Schema({
    userId: {
        type:type,
        ref:"myuser"
    },
	productId: {
        type:type,
        ref:"myproduct"

    },
	amount: Number,
	isFreeAppUser: {
        type:Boolean,
        default:false

    }, 
	date: Date
})

module.exports=mongoose.model("myorderdetail",orderSchema);
