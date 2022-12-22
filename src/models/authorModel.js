const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
    authorId: String,
    authorName: String,
    age:Number,
    address:String,
    rating:Number


}, { timestamps: true });

module.exports = mongoose.model('LibraryAuthor', authorSchema)
