const mongoose= require("mongoose");

const userSchema= new mongoose.Schema({
    username:{
        type:String
    },
    email:{
        type:String,
        require:true
    },
    password:String
})
module.exports= mongoose.model("User",userSchema)