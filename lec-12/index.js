const express=require("express");
const app = express();
const fs = require("fs")
app.use(express.urlencoded({extended:true})); //it parse form urlencoded data into object

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})
app.post("/users",(req,res)=>{
    let username = req.body.username;
    let password=req.body.password;
    let user={
        username:username,
        password:password
    }
    let alluser=[]
   fs.readFile("./users.json","utf-8",function(err,data){
    if(err) return res.send(err);
    if(data){
        alluser=JSON.parse(data) //[{name:fhdsf,password:1233}]
    }
    alluser.push(user);
    fs.writeFile("./users.json",JSON.stringify(alluser),function(err){
        if(err) return res.send(err);
        res.send("user Registered")
    })
   })
    
    // console.log(username,password)
    // console.log(req.body)
    // res.send("check console")

})
app.get("/login",(req,res)=>{
    res.sendFile(__dirname+"/login.html")
})
app.post("/login",(req,res)=>{
    //username, //password
})
app.listen(4444,()=>{
    console.log("server started")
})