class Orderbook{
    constructor(symbol){
        this.symbol=symbol
        this.bids=[];
        this.ask=[];
        this.currentPrice=null;
        this.trades=[];
    }
    _sort(side){
        if(side==="BUY"){
            this.bids.sort((a,b)=>{
                if(a.price!=b.price){
                    return b.price-a.price
                }
                return a.timeStamp-b.timeStamp;
            }); //sort in lexiographical order
            //price
        }else{
            this.ask.sort((a,b)=>{
                if(a.price!=b.price){
                    return a.price-b.price  
                }
                return a.timeStamp-b.timeStamp
                
            });
        }

    }

    placeOrder(side,type,price=null,quantity,user){
        let newOrder={
            orderId:Math.floor(Math.random()*1000000),
            side:side,
            type:type,
            price:price,
            origQty:quantity,
            executedQty:0,
            remainingQty:quantity,
            timeStamp:Date.now(),
            user:user
        }
        if(type==="LIMIT"){
            let result= this._limitMatch(newOrder);
        }
        else if(type==="MARKET"){
            let result = this._marketMatch(newOrder);
        }else{
            return "Type not found"
        }

    }
    _limitMatch(order){

    }
    _marketMatch(order){

    }
}

let BTCUSD = new Orderbook("BTC_USD");
BTCUSD.bids.push({
     orderId:Math.floor(Math.random()*1000000),
            side:"BUY",
            type:"LIMIT",
            price:"100",
            origQty:10,
            executedQty:0,
            remainingQty:10,
            timeStamp:Date.now(),
            user:"Nitesh"
})

BTCUSD.bids.push({
     orderId:Math.floor(Math.random()*1000000),
            side:"BUY",
            type:"LIMIT",
            price:"99",
            origQty:10,
            executedQty:0,
            remainingQty:10,
            timeStamp:Date.now(),
            user:"Nitesh"
})
BTCUSD.bids.push({
     orderId:Math.floor(Math.random()*1000000),
            side:"BUY",
            type:"LIMIT",
            price:"101",
            origQty:10,
            executedQty:0,
            remainingQty:10,
            timeStamp:Date.now(),
            user:"Nitesh"
})
BTCUSD.bids.push({
     orderId:Math.floor(Math.random()*1000000),
            side:"BUY",
            type:"LIMIT",
            price:"100",
            origQty:10,
            executedQty:0,
            remainingQty:10,
            timeStamp:Date.now(),
            user:"Ritik"
})
BTCUSD._sort("BUY");
console.log(BTCUSD);





//no encapsulation in javascript(private)
//you create a function with _

//bids
// [
// {
//     orderId:,
//     price:5,
//     quantity,
// },
// {
//     orderId:,
//     price:10,
//     quantity,
// },
// {
//     orderId:,
//     price:,
//     quantity,
// },

// ]