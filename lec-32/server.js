import { WebSocketServer } from 'ws';
const wss = new WebSocketServer({ port: 8080 });

//events

wss.on("connection",function(socket){
    console.log("user connected")
    // console.log(socket)
    // setInterval(()=>{
    //     socket.send("welcome to my website")
    // },1000)
    socket.on("message",function(message){
        console.log(message.toString())
        socket.send(message.toString())
    })
})


//app.get("/",(req,res)=>{
    // })