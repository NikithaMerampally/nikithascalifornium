const AuthorModel = require("../models/authorModel");
const blogModel = require("../models/blogModel");
const BlogModel = require("../models/blogModel");


const createBlog = async function (req, res) {
  try {
    let data = req.body
    let {title, body, authorId, tags, category, subcategory} = data
     
    //IF ANY FIELD IS NOT PRESENT IN THE REQ BODY------------------------------------------
    if(!title) return res.status(400).send({status : false,msg : "cannot create blog,title is required"})
    if(!body) return res.status(400).send({status : false,msg : "cannot create blog,body is required"})
    if(!authorId) return res.status(400).send({status : false,msg : "cannot create blog,authorId is required"})
    if(!tags) return res.status(400).send({status : false,msg : "cannot create blog,tags are required"})
    if(!category) return res.status(400).send({status : false,msg : "cannot create blog,category is required"})
    if(!subcategory) return res.status(400).send({status : false,msg : "cannot create blog,subcategory is required"})

    //LOOKING FOR THE AUTHOR ID IN COLLECTION--------------------------------------
    let authorData = await AuthorModel.findById(authorId);
    
    //IF AUTHOR ID IS NOT CORRECT-------------------------------
    if (!authorData)  return  res.status(400).send({ status: false, msg: "author does not exist with this Id" });

    //IF AUTHOR ID IS CORRECT THEN CREATING THE DOCUMENT------------------------------------
      const createdBlog = await BlogModel.create(data);
      return res.status(201).send({data:createdBlog});
  } 
  catch (err) {
     return res.status(500).send({ status: false, msg: err.message });
  }
};



const filterData = async function (req, res) {
  try {
    let query = req.query;
     
    //IF THERE IS NO QUERY GIVEN------------------------------------------------
    if (Object.keys(query).length == 0) {
      let getData = await BlogModel.find({isDeleted: false,isPublished: true}).populate("authorId");

    //IF NO SUCH DOCUMENT IS FOUND--------------------------------------------
      if (getData.length==0)  return res.status(404).send("Documents not found"); 
      
    //IF DOCUMENT FOUND------------------------------------------------------------
      return res.status(200).send({data: getData});
    } 

    //IF THERE IS QUERY GIVEN-------------------------------------------------------
    else {
      let findData = await BlogModel.find({ ...query,isDeleted: false,isPublished: true}).populate("authorId");
      
    //IF NO DOCUMENT WITH GIVEN QUERY FOUND------------------------------------------------
      if (findData.length == 0) return res.status(404).send({ msg: "Data not found" });
     
   //IF DOCUMENT MATCHING THE GIVEN QUERY FOUND-------------------------------------------------
      return res.status(200).send({ data: findData });
    }
  }
   catch (err) {
    return res.status(500).send({ status: false, error: err.message });
  }
};



const upddateblog = async function (req, res) {
  try {
    //LOOKING FOR THE REQUIRED BLOG IN COLLECTION------------------------------
    let blogsdata = await BlogModel.findOne({_id: req.params["blogId"], isDeleted: false});

    //IF THE BLOG IS NOT PRESENT-------------------------------------------------
    if (!blogsdata)
    return res.status(404).send("no documents found with this id");

    //AUTHORIZATION----------------------------------------------------------------
    if (blogsdata.authorId!=req.decodedToken.authorId) return res.status(400).send({status:false,msg:"You're not authorized to do this action"})
    
    //IF AUTHORIZATION SUCCESSFUL --------------------------------------------------
    let data = req.body;
    let todaysDate= new Date().toLocaleString()
    let updates = await BlogModel.findOneAndUpdate(
      { _id: req.params["blogId"] },
      //updated body tag category subcategory as given in readme 
      {  body: data["body"], $push: {tags: data["tags"]},title:data["title"],category:data["category"],
      $push: {subcategory: data["subcategory"]}, isPublished: true,$set: { publishedAt: todaysDate }  },

      { new: true }
    );
    return res.status(200).send({ data: updates });
  } 
  catch (error) {
      return res.status(500).send({status: false, msg : error.message});
  }
};

const deleteBlog = async function (req, res) {
  try {
    let blogId= req.params.blogId;
    let data= await  BlogModel.findById(blogId)
    if(!data) return res.status(404).send({status:false,msg:"no documents found with this id"})

  //AUTHORIZATION----------------------------------------------------
  if (data.authorId!=req.decodedToken.authorId) return res.status(400).send({status:false,msg:"You're not authorized to do this action"})
  
   //IF AUTHORIZATION SUCCESSFUL--------------------------------------
    let todaysDate= new Date().toLocaleString()
    const blogData = await BlogModel.findOneAndUpdate(
      { _id: blogId,isDeleted:false },
      { $set: { isDeleted: true , deletedAt: todaysDate,isPublished:false } },
      { new: true }
    );

    //IF ALREADY DELETED,THEN BLOG CANNOT BE DELETED
    if (!blogData) return res.status(404).send({ status: false, msg: "blog cannot be deleted" });
   return  res.status(200).send();
  } catch (err) {
     return res.status(500).send({ status: false, msg: err.message });
  }
};



const deleteBlogByFilter = async function (req, res) {
  try {
    let query = req.query;
    //IF NO QUERY IS PROVIDED------------------------------------------------
    if (Object.keys(query).length === 0 ) return res.status(404).send({ status: false, msg: "pls provide query" });

    //IF QUERY IS PRESENT THEN LOOKING FOR THE REQUIRED DOCUMENT ALONG WITH AUTHORIZATION--------------------
    let data=await BlogModel.find({authorId:req.decodedToken.authorId,...query})
   
    if(data.length==0) return res.status(400).send({status:false,msg:"No blog to be deleted"})
   
    let author=data[0].authorId
    if(author){
      let todaysDate= new Date().toLocaleString()
      const blogData =  BlogModel.updateMany(
      { ...query,  authorId: req.decodedToken.authorId ,isDeleted:false},
      { $set: { isDeleted: true , deletedAt: todaysDate,isPublished:false} },
      { new: true }
    );
    
    if (blogData.modifiedCount === 0) return res.status(400).send({ status: false, message: "No blog to be deleted" });
    else return res.status(200).send({ status: true, data: `${blogData.modifiedCount} blog deleted` });
    
      }else return res.status(400).send({ status: false, message: "You are not authorized to do this action" });
  
  } 
  catch (err) {
   return res.status(500).send({ status: false, msg: err.message });
  }
};







module.exports.createBlog = createBlog;
module.exports.filterData = filterData;
module.exports.upddateblog = upddateblog;
module.exports.deleteBlog = deleteBlog;
module.exports.deleteBlogByFilter = deleteBlogByFilter;






