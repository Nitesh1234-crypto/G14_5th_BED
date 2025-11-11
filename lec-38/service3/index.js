let {createClient} = require("redis");
let client= createClient();

async function notification(){
     await client.subscribe("like",(message)=>{
        console.log(message);
    })
      await client.subscribe("notify_me",(message)=>{
        console.log(message);
    })
}
setTimeout(()=>{
notification()
},2000)

client.connect()
.then(()=>console.log("redis connected!"))
.catch((e)=>console.log(e));
