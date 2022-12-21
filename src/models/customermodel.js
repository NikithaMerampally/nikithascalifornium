let mongoose=require('mongoose')
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
const uuid=require('uuid');
let customerSchema=new mongoose.Schema({
    firstName:String,
    lastName:String,
    mobileNumber:{
        type:String,
        length:10

    },
    Date:date,
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    address:String,
    customerID:{
        type:String,
        default:uuid.v1(),
        ref:"cardmodel"

    },
    status:{
        type:String,
        enum:["ACTIVE","INACTIVE"]
    }
})

module.exports=mongoose.model("customerModel",customerSchema)