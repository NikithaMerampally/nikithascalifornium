const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    userName:String,
    mobile: {
        type: String,
        unique:true,
        required: true
    },
    emailId: String,
    password: String,
    gender: {
        type: String,
        enum: ["male", "female", "other"]
    },
    age: Number,
    isDeleted:Boolean
}, { timestamps: true });

module.exports = mongoose.model('facebookuser', userSchema)
