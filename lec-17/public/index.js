// fetch("https://jsonplaceholder.typicode.com/todos")
// .then((res)=>{
//     // console.log(res);
//     // console.log(res.ok);
//    return res.json()
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log(err)
// })

async function getTodo(){
let response=await fetch("https://jsonplaceholder.typicode.com/todos")
let data=await response.json()
console.log(data)
}
getTodo()