const Orderbook = require("../service/orderbook");
let ob = new Orderbook("BTCUSD");

module.exports.postPlaceOrder = async(req,res)=>{

   let {type,side,price,quanity,user,symbol} = req.body;
   let orderStatus=ob.placeOrder(side ,type,price,quanity,user);
   console.log(orderStatus)
   res.json(orderStatus);
}