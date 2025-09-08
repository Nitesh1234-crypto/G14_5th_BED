const express= require("express");
const { m1, m2, m3 } = require("./middleware/middleware");
const app=express();
app.use(express.static(__dirname+"/public"));
app.use(express.json());
app.use(express.urlencoded());
app.use(m1);
// app.use(m2);
app.get("/",(req,res,next)=>{
    console.log("running / route")
    res.json({
        message:"welcome to home"
    })
    next()
})
app.use(m2);

app.get("/health",(req,res)=>{
    console.log("running /health route")
    res.json({
        status:"ok",
        message:"server running ok"
    })
})
app.get("/users",m3,(req,res)=>{
    console.log("running /users route");
    res.json({
        message:"fetched user data"
    })
})

app.listen(8765,()=>{
    console.log("server started")
})