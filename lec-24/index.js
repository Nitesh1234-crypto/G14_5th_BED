const express= require("express");
const app = express();
const mongoose= require("mongoose");
let User= require("./model/user");
let Blog= require("./model/blog")
let userRouter= require("./router/userrouter");
let blogRouter= require("./router/blogrouter");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname+"/public"));
function m1(req,res,next){
    console.log("running middleware one");
    next();
}
app.use("/b/a",m1)
app.get("/health",m1)
app.get("/health/a/b/c",(req,res)=>{
    res.json({
        status:"ok",
        message:"server running ok"
    })
})

app.use("/api/blogs",blogRouter)


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