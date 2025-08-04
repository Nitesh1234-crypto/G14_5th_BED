const express=require("express");
const app = express()
const path = require("path")

app.get('/', (req, res) => {
  res.send('Hello World')
})
app.get("/users",(req,res)=>{
    res.send("this is users page")
})
app.get("/blogs",(req,res)=>{
    res.send("<div><h1>First blog</h1><p>sfdhfdshfshjshfshfshfsdhfjfsh</p></div>")
})
app.get("/posts",(req,res)=>{
    console.log(path.join(__dirname,"public","about.html"))
    console.log(path.join(__dirname,"index" ,"//ok.html"))
    // res.sendFile(path.join(__dirname,"index" ,"//ok.html"))
     res.sendFile(path.join(__dirname,"index.html"))
})
app.get("/allusers",(req,res)=>{
    let allusers=[{id:1,name:"Nitesh"},{id:2,name:"Ritik"}]
    res.json(allusers);
})


//path variable
//1.query parameter
app.get("/profile",(req,res)=>{
    let pathvariableId = req.query.id
    let pathvariableName = req.query.name
    // console.log(req.query)
    res.send("profile of id" + " "+ pathvariableId+ " "+pathvariableName)

})
//2.params
app.get("/profile/:id/name/:username",(req,res)=>{
    let id = req.params.id;
    console.log(typeof Number(id))
    let username=req.params.username;
    console.log(req.params)
    res.send("ok got it yours profile id is" +" "+id 
        +" " +username
    )
})
app.listen(3000,()=>{
    console.log("server started")
})