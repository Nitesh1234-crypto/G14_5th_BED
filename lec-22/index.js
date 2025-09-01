const express= require("express");
const app = express();
const mongoose= require("mongoose");
let User= require("./model/user");
let Blog= require("./model/blog")
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname+"/public"));
app.get("/health",(req,res)=>{
    res.json({
        status:"ok",
        message:"server running ok"
    })
})
app.post("/register",async(req,res)=>{
    let {name,email,password} = req.body;
    let userExist= await User.findOne({email:email})
    if(userExist){
        return res.json({
            success:false,
            message:"email already exist please login or try with different email"
        })
    }
    let newUser= await User.create({
        name:name,
        email:email,
        password:password
    })
    res.json({
        success:true,
        message:"user registered successfully",
        data:newUser
    })


})
app.get("/users",async(req,res)=>{
    let allusers= await User.find().populate("blogs");
    res.json({
        success:true,
        data:allusers
    })
})
app.post("/blogs",async(req,res)=>{
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

})
app.get("/blogs",async(req,res)=>{
    let allblogs= await Blog.find().populate("userId");
    return res.json({
        success:true,
        data:allblogs
    })
})
app.get("/blogs/:id",async(req,res)=>{
    let {id}= req.params;
    let blog= await Blog.findById(id);
    res.json({
        success:true,
        data:blog
    })
})
app.delete("/blogs/:id",async(req,res)=>{
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
})


mongoose.connect("mongodb://127.0.0.1:27017/g14db2")
.then(()=>{
    console.log("connected")
})
.catch((err)=>{
    console.log(err.message)
})
app.listen(7778,()=>{
    console.log("server started")
})