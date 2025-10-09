
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

addUser("Nitesh","nitesh1234@gmail.com")
.then((data)=>console.log(data))
.catch((e)=>console.log(e.message))