const User= require("../model/user");
const Blog= require("../model/blog")
module.exports.postAddBlogs=async(req,res)=>{
    let {title,content,userId}= req.body;
    if(!userId){
        return res.json({
            success:false,
            message:"userId is required"
        })
    }
    let userExist= await User.findById(userId)
    if(!userExist){
        return res.json({
            success:false,
            message:"Invalid user id"
        })
    }
    let newBlog= await Blog.create({
        title:title,
        content:content,
        userId:userId
    })
    userExist.blogs.push(newBlog._id)
    await userExist.save()
    res.json({
        success:true,
        message:"blog added successfully"
    })

}

module.exports.getAllBlogs= async(req,res)=>{
    let allblogs= await Blog.find().populate("userId");
    return res.json({
        success:true,
        data:allblogs
    })
}
module.exports.getOneBlogs=async(req,res)=>{
    let {id}= req.params;
    let blog= await Blog.findById(id);
    res.json({
        success:true,
        data:blog
    })
}
module.exports.deleteOneBlogs=async(req,res)=>{
    let {id}= req.params
    let {userId} = req.body;
    let blogExist= await Blog.findOne({_id:id})
    if(!blogExist){
        return res.json({
            success:false,
            message:"blog does not exist"
        })
    }
    if(blogExist.userId!=userId){
        return res.json({
            success:false,
            message:"you are not authorized to delete this blog"
        })
    }
    await Blog.findByIdAndDelete(id);
    let user= await User.findById(userId)
    let updatedblogs= user.blogs.filter((blogid)=>{
        if(blogid!=id){
            return true
        }
    })
    user.blogs=updatedblogs
    await user.save();
    res.json({
        success:true,
        message:"blog deleted successfully"
    })
}