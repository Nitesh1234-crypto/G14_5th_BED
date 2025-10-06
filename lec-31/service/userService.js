const {PrismaClient} = require("./generated/prisma")
const prisma = new PrismaClient()
class User{
  static async addUser(name,email){
    let newUser= await prisma.user.create({
        data:{
            name:name,
            email:email
        }
    })
    return "user created"
}  
async deleteUser(id){
    // await prisma.tweet.deleteMany({
    //     where:{
    //         userId:Number(id)
    //     }
    // })
    await prisma.user.delete({
        where:{
            id:id
        }
    })  
    return "user deleted"     

}
}