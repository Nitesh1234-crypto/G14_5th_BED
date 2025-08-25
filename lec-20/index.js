const express= require("express");
const app = express();
const mongoose = require('mongoose');
const BlogModel = require("./model/blogs")
app.use(express.static(__dirname+"/public"))
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.get("/health",(req,res)=>{
    res.json({
        status:"ok",
        message:"server running ok"
    })
})


app.get("/blogs",async (req,res)=>{
    try {
         let allblogs= await BlogModel.find()
            res.json({
            success:true,
            data:allblogs
        })
    } catch (error) {
        res.json({
            error:error.message
        })
    }
 
})

app.post("/addblogs",async(req,res)=>{
    try {
        const {title,content} = req.body;
        await BlogModel.create({
        title:title,
        content:content
        })
        res.json({
        success:true,
        message:"blog added succesfully"
        })
    } catch (error) {
        console.log(error)
        res.json({
            error:"Internal server error"
        })
    }
   

})
// //inserting new data in collection
// function addBlog(){
//     let blog={
//     title:"Third blog",
//     content:"Third blog content",
//     }
//     let newBlog= new BlogModel(blog);
//     newBlog.save().then(()=>{
//         console.log("blog added successfully")
//     })
// }
// // addBlog()

// //delete data from collection
// async function deleteBlog(){
//     //delete a blog using id
//     try {
//     //    await BlogModel.deleteOne({_id:"68a575c4cddfd5b47cf18056"})
//     await BlogModel.findByIdAndDelete("68a69a188f641c2d06cf2880")
//     console.log("blog deleted") 
//     } catch (error) {
//         console.log(error.message)
//     }
    

// }

// // deleteBlog()


// async function readAllBlogs(){
//     try {
//         // let allblogs=await BlogModel.find()

//         // let allblogs=await BlogModel.find({_id:"68a69a699bf9affcf10cba58"})
//         // console.log(allblogs[0])
//         // let allblogs=await BlogModel.find({title:"first blog"})
//         // let allblogs=await BlogModel.findOne({title:"first blog"})
//         let allblogs=await BlogModel.findById("68a69db7407e098fc8dfe551")
//         console.log(allblogs)

//     } catch (error) {
//         console.log(error.message)
//     }
   
// }
// readAllBlogs()






mongoose.connect('mongodb://127.0.0.1:27017/newg14db')
  .then(() => console.log('Connected!'))
  .catch((err)=>console.log(err.message))
app.listen(3223,()=>{
    console.log("server started")
})