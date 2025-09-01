const express= require("express");
const { postAddBlogs, getAllBlogs, getOneBlogs, deleteOneBlogs } = require("../controller/blogController");
const router= express.Router();

router.post("/",postAddBlogs)
router.get("/",getAllBlogs)
router.get("/:id",getOneBlogs)
router.delete("/:id",deleteOneBlogs)


module.exports=router;