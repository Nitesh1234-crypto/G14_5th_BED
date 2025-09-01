let User= require("../model/user")
module.exports.postRegisterUser=async(req,res)=>{
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

}

module.exports.getAllUsers=async(req,res)=>{
    let allusers= await User.find().populate("blogs");
    res.json({
        success:true,
        data:allusers
    })
}