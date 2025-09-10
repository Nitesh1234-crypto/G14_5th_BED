const express= require("express");
const app= express();
const mongoose= require("mongoose");
app.use(express.urlencoded({extended:true}));
app.use(express.json());




app.listen(5656,()=>{
    console.log("server started")
})
mongoose.connect("mongodb://127.0.0.1:27017/G14myblogapp")
.then(()=>console.log("connected"))
.catch(e=>console.log(e.message));
