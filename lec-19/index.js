const express= require("express");
const app = express();
const mongoose = require('mongoose');
const BlogModel = require("./model/blogs")
app.use(express.static(__dirname+"/public"))
app.get("/health",(req,res)=>{
    res.json({
        status:"ok",
        message:"server running ok"
    })
})


function addBlog(){
    let blog={
    title:"first blog",
    content:"first blog content",
    date:"19 august 12:33"
    }
    let newBlog= new BlogModel(blog);
    newBlog.save().then(()=>{
        console.log("blog added successfully")
    })
}
addBlog()








mongoose.connect('mongodb://127.0.0.1:27017/newg14db')
  .then(() => console.log('Connected!'))
  .catch((err)=>console.log(err.message))
app.listen(3323,()=>{
    console.log("server started")
})