const express = require("express");
const mongoose = require('mongoose');
const app = express();
const userRouter= require("./routes/userRoutes")
const blogRouter= require("./routes/blogRoutes");
const authRouter= require("./routes/authRoutes")
const jwt=require("jsonwebtoken")
app.use(express.urlencoded({extended:true}));
app.use(express.json());
//middleware to verify jwt token
app.use("/api/users",userRouter)
app.use("/api/blogs",blogRouter)
app.use("/api/auth",authRouter)

mongoose.connect('mongodb://127.0.0.1:27017/G27DBs')
  .then(() => console.log('Connected!'));
app.listen(5556,()=>{
    console.log("server started")
})