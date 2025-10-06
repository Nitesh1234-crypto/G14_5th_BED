
const {PrismaClient} = require("./generated/prisma")
const prisma = new PrismaClient()
async function addUser(name,email){
    let newUser= await prisma.user.create({
        data:{
            name:name,
            email:email
        }
    })
    return "user created"

}

// addUser("Nitesh","nitesh1234@gmail.com")
// .then((data)=>console.log(data))
// .catch((e)=>console.log(e.message))

async function addTweet(userId,image=null,body){
    //userId
    let userExist= await prisma.user.findUnique({
        where:{
            id:Number(userId)
        }
    })
    if(!userExist){
        return "tweet cannot be added as user id is invalid"
    }
    let newTweet= await prisma.tweet.create({
        data:{
            userId:Number(userId),
            image:image,
            body:body
        }
    })
    return JSON.stringify({
        message:"tweet added",
        data:newTweet
    })

}

addTweet("1",null,"my first tweet")
.then((data)=>console.log(data))
.catch((e)=>console.log(e))

function updateTweet(){

}

function readTweet(){
    
}