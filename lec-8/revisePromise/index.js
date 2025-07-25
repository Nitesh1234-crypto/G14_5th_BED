let products=[
    {
        id:1,
        name:"Iphone 16",
        price:100000
    },
      {
        id:2,
        name:"samsung",
        price:80000
    }
]
let bankBalance = 1000000;
function buyProduct(product_Name){
    return new Promise((resolve,reject)=>{
         for(let i=0;i<products.length;i++){
        if(products[i].name==product_Name){
            return resolve(products[i].price)
            
        }
    }
    reject("no product found")
    })
    //search is product_name available in product array
    //if yes then return price, if no return product not available
   

}
function pay(amount){
    return new Promise((resolve,reject)=>{
        if(bankBalance>amount){
        bankBalance=bankBalance-amount;
       return resolve("product successfully purchased");
    }
    reject("bank balance is low")
    })
    

}
buyProduct("samsung")
.then((data)=>{
    console.log(data)
   return pay(data)
}
)
.then((message)=>{
console.log(message)
})
.catch((err)=>{
console.log(err)
})

console.log("wassup");
//async/await keyword to write promise in a synchronous way
let amount=buyProduct("Iphone")
let mes=pay(amount)
console.log(mes)

