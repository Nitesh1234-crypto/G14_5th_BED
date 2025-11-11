const {WebSocketServer} = require("ws")
let wss=new WebSocketServer({port:7878})
let rooms= new Map();
// rooms={
//     "2efgh5679de": [s1,s2],
//     "saafsuthra" :[s3]
// }
wss.on("connection",function(socket){
    console.log("new user connected")
    socket.on("message",function(message){
        /*{
            type:String,
            payload:{
                roomId | message
            }
        }*/
       let parseMessage= JSON.parse(message);
       let type= parseMessage.type;
       if(type=="join"){
        let roomId= parseMessage.payload.roomId;
            if(!rooms.get(roomId)){
                rooms.set(roomId, new Set())  
            }
            rooms.get(roomId).add(socket)
            // console.log(rooms)
            socket.roomId=roomId
            socket.send(JSON.stringify({
                type:"join",
                payload:{
                    messsage:"Joined successfully"
                }
            }))
       }
        else if(type=="chat"){
            console.log(socket)
            let message= parseMessage.payload.message;
            let roomId= socket.roomId;
            console.log(message)
            console.log(roomId)
            let allsocket= rooms.get(roomId);
            console.log(allsocket);
            allsocket.forEach(s => {
                s.send(JSON.stringify({
                    type:"chat",
                    payload:{
                        message:message
                    }
                }))
                
            });

       }
    })


})


// function m1(req,res,next){
//     req.userId= decode.id
//     next()

// }