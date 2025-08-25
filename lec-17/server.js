const express= require("express");
const app = express();
const fs= require("fs");
app.use(express.static(__dirname+"/public"))
app.get("/todos",(req,res)=>{
fs.readFile("./todos.json","utf-8",function(err,data){
    if(err) return res.json({
        success:false,
        message:err.message
    })
    let todos= JSON.parse(data);
    console.log(todos)
    res.json({
        success:true,
        data:todos
    })
})
})


app.listen(5565,()=>{
    console.log("server started")
})