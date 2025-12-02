let express= require("express");
const { postPlaceOrder } = require("../controller/order");
let router=express.Router();
router.post("/",postPlaceOrder)
module.exports=router;