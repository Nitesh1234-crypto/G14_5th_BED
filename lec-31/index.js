const express= require("express");
const app= express();
const userRoute= require("./routes/userRoute")
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use("/api/users",userRoute)





app.listen(6666,()=>{
    console.log("server started")
})



// // addUser("Nitesh","nitesh1234@gmail.com")
// // .then((data)=>console.log(data))
// // .catch((e)=>console.log(e.message))

// async function addTweet(userId,image=null,body){
//     //userId
//     let userExist= await prisma.user.findUnique({
//         where:{
//             id:Number(userId)
//         }
//     })
//     if(!userExist){
//         return "tweet cannot be added as user id is invalid"
//     }
//     let newTweet= await prisma.tweet.create({
//         data:{
//             userId:Number(userId),
//             image:image,
//             body:body
//         }
//     })
//     return JSON.stringify({
//         message:"tweet added",
//         data:newTweet
//     })

// }

// // addTweet("1",null,"my first tweet")
// // .then((data)=>console.log(data))
// // .catch((e)=>console.log(e))

// function updateTweet(){

// }

// // async function readTweets(){
// //     let alltweets= await prisma.tweet.findMany({
// //         select:{
// //             user:{
// //                 select:{
// //                     name:true
// //                 }
// //             },
// //             id:true,
// //             body:true,
// //             image:true
// //         }
// //     });
// //     return alltweets;
// // }

// readTweets()
// .then((data)=>{
//     console.log(data)
// })
// .catch()
// async function readTweets(){
//     let alltweets= await prisma.tweet.findMany({
//        include:{
//         user:{
//             select:{
//                 name:true
//             }
//         }
//        },
      
//     });
//     return alltweets;
// }



// // deleteUser("1")
// // .then((data)=>console.log(data))
// // .catch((e)=>console.log(e))