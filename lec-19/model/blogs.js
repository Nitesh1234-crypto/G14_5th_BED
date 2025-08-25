const mongoose = require("mongoose");


const blogSchema = new mongoose.Schema({
    title:String,
    content:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

let BlogModel=mongoose.model("Blog",blogSchema)

module.exports=BlogModel
// blog={
//     title:"first blog",
//     content:"first blog content",
//     date:"19 august 12:33"
// }
