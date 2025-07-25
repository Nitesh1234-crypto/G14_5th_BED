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
function add(a,b){
    return a+b;
}
async function purchase(){
    try {
        let amount=await buyProduct("motorolla");
        let message=await pay(amount)
        console.log(message);
    // return message;
    } catch (error) {
        console.log(error)
    }
   
}
let re=purchase()
console.log(re);

let result=add(2,3);
console.log(result);
console.log("hello world")