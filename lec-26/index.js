const express= require("express");
const app= express();
const mongoose= require("mongoose");
app.use(express.urlencoded({extended:true}));
app.use(express.json());
const User= require("./model/user")
const jwt= require("jsonwebtoken");
function verifyToken(req,res,next){
    let token= req.headers.authorization;
    console.log(token);
    if(!token){
        return res.json({
            success:false,
            message:"token required"
        })
    }
    let decode= jwt.verify(token,"jaishreeram");
    console.log(decode);
    if(!decode){
        return res.json({
            success:false,
            message:"Invalid token"
        })
    }
    req.user_id=decode.id;
    next()
    //req se token mango,
    //token ko verify
    //req ko aage bhj do

}
app.get("/home",verifyToken,async (req,res)=>{
    let userId= req.user_id;
    let user= await User.findById(userId);
    let username= user.username;
    res.send("Home page"+ " "+ username)
})
app.post("/api/users/signup",async(req,res)=>{
    let {username,email,password} = req.body;
    let userExist=await User.findOne({email:email});
    if(userExist){
        return res.json({
            success:false,
            message:"User already exist with this email , please login to continue"
        })
    }
    let newUser= await User.create({
        username:username,
        email:email,
        password:password
    })
    res.json({
        success:true,
        message:"User sign up successful, please login to continue"
    })

})
app.post("/api/auth/login",async(req,res)=>{
    const {email,password} = req.body;
    let userExist= await User.findOne({email:email});
    if(!userExist){
        return res.json({
            success:false,
            message:"Email not registered, please signup"
        })
    }
    if(userExist.password!=password){
        return res.json({
            success:false,
            message:"Incorrect password"
        })
    }
    //create token to store user state using jwt
    let token= jwt.sign({id:userExist._id},"jaishreeram")
    console.log(token)
    res.json({
        success:true,
        message:"login successfull",
        token:token
    })



})


app.listen(5656,()=>{
    console.log("server started")
})
mongoose.connect("mongodb://127.0.0.1:27017/G14myblogapp")
.then(()=>console.log("connected"))
.catch(e=>console.log(e.message));
