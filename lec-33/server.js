
const {WebSocketServer} = require("ws");

const wss= new WebSocketServer({port:9999})


// wss.on("connection",function(socket){
//     console.log("user connected")

//     socket.on("message",function(message){ //string,buffer
//         let stringmessage= message.toString();
//         //if stringmessage meow then reply with meow, else do nothing
//         if(stringmessage=="meow"){
//             socket.send("meow - meow");
//         }

//     })

// })

//broadCasting
let allsocket= [];
wss.on("connection",function(socket){
    allsocket.push(socket)
    console.log(allsocket)
    socket.on("message",function(message){
        for(let i=0;i<allsocket.length;i++){
            let s= allsocket[i];
            if(s!=socket){
                 s.send(message.toString());
            }
        }
        
    })
    // socket.on("")
})

//rooms
let rooms= new Map()
new Set()

rooms.get("red").add(socket)
rooms.set("red",new Set());