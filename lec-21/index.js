const express= require("express");
const app = express();
const mongoose= require("mongoose");
let User= require("./model/user")
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
    let allusers= await User.find();
    res.json({
        success:true,
        data:allusers
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