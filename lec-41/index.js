const express = require("express");
const app = express();
app.use(express.json());
const orderRoute= require("./routes/order")
app.use("/api/v1/order",orderRoute);





app.listen(5000,()=>{
    console.log("server started")
})
