let products=[
    {
        id:1,
        name:"Iphone 16",
        price:100000
    },
      {
        id:2,
        name:"smasung",
        price:80000
    }
]
let bankBalance = 10;
function buyProduct(product_Name){
    return new Promise((resolve,reject)=>{
         for(let i=0;i<products.length;i++){
        if(products[i].name==product_Name){
            return resolve(products[i].price)
            // cb(null,products[i].price)
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

buyProduct("smasung",function(err,data){
    if(err) return console.log(err);
    console.log(data);
    pay(data,function(err,message){
        if(err) return console.log(err);
        console.log(message);
    })

})
// FileSystem.readFile(filepath,encoding,function(err,data){

// })