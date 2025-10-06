const User = require("../service/userService")

module.exports.postUser = async function(req,res){
    let {name,email} = req.body;
   let message=await User.addUser(name,email)
   res.json({
    success:true,
    message:message
   })

}