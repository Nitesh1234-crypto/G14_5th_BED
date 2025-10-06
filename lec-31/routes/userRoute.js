const express= require("express");
const { postUser } = require("../controller/userController");
const router= express.Router();

router.post("/adduser",postUser);

module.exports=router