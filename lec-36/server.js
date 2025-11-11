const { createClient } =require("redis");
const client = createClient();
const express= require("express");
const app = express();
const mongoose = require("mongoose")
let userSchema = new mongoose.Schema({
    username:String,
    followerCount:{
        type:Number,
        default:0
    },
    followingCount:{
        type:Number,
        default:0
    }
})
const User= mongoose.model("User",userSchema);

app.get("/api/users/profile/:id",async(req,res)=>{
    // users:id
    const {id} = req.params;
    try{
        let userFromRedis= await client.get("users:"+id)
        if(userFromRedis){
            return res.json({
                success:true,
                data:userFromRedis
            })
        }
        let usersFromDatabase= await User.findById(id);
        if(!usersFromDatabase){
            return res.json({
                success:false,
                message:"No user found!"
            })
        }
        await client.set("users"+id,JSON.stringify(usersFromDatabase)); //TTL
        res.json({
            success:true,
            data:usersFromDatabase  
        })

    }catch(e){
        console.log(e)
        res.json({
            success:false,
            message:"Internal server error"
        })
    }

})



//redis database connection
client.connect()
.then(()=>{
    console.log("redis connected")

})
.catch((e)=>{
    console.log(e)
})
client.on("error", (err) => console.log("Redis Client Error", err))

//mongodb database connection
mongoose.connect("mongodb://127.0.0.1:27017/myredisdatabase")
.then(()=>console.log("db connected"))
.catch((e)=>console.log(e))

//server 
app.listen(6556,()=>{
    console.log("server started")
})