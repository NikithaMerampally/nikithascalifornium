const mongoose=require("mongoose")

let authorSchema=new mongoose.Schema(
    {     
        author_id:{
            type:Number,
            required:true
        },
        author_name:String,
        age:Number,
        address:String


    },{timestamp:true}

)

module.exports=mongoose.model("assignmentauthor",authorSchema);