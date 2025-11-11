let {createClient} = require("redis");
let client= createClient();

async function notification(){
    await client.PUBLISH("notify_me","back in stock")
    await client.PUBLISH("like","you post is liked by someone")  
}
setTimeout(()=>{
notification()
},2000)

client.connect()
.then(()=>console.log("redis connected!"))
.catch((e)=>console.log(e));
