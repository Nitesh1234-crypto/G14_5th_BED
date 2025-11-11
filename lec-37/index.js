const {createClient} = require("redis")
const client= createClient();

async function addJobToqQueue(job){
    let response=await client.LPUSH("nodequeue",job);
    console.log(response);
}
// setTimeout(() => {
//     addJobToqQueue(JSON.stringify({id:"234",url:"http://image.com"}))
//     addJobToqQueue(JSON.stringify({id:"343",url:"http://image.com"}))
//     addJobToqQueue(JSON.stringify({id:"565",url:"http://image.com"}))

// }, 3000);
async function worker(){
    while(true){
        let job= await client.BRPOP("nodequeue",0)
        return job;
    }

}
setTimeout(()=>{
worker()
.then((job)=>console.log(job))
.catch((e)=>console.log(e))
},3000)


client.connect()
.then(()=>console.log("redis connected"))
.catch((e)=>console.log(e))

