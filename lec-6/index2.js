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
function buyProduct(product_Name,cb){
    //search is product_name available in product array
    //if yes then return price, if no return product not available
    for(let i=0;i<products.length;i++){
        if(products[i].name==product_Name){
            cb(null,products[i].price)
            // cb(null,products[i].price)
        }
    }
    cb("no product found",null)

}
function pay(amount,cb){
    if(bankBalance>amount){
        bankBalance=bankBalance-amount;
       return cb(null,"product successfully purchased");
    }
    cb("bank balance is low", null)

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