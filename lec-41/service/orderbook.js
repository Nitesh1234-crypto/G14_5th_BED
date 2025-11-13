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
            let result= this._limitMatch(newOrder); //order;
            if(result.remainingQty>0){
                if(result.side =="BUY"){
                    this.bids.push(result)
                    this._sort("BUY")
                }else{
                    this.ask.push(result);
                    this._sort("SELL")
                }
            }
        }
        else if(type==="MARKET"){
            let result = this._marketMatch(newOrder);
        }else{
            return "Type not found"
        }

    }
    _limitMatch(order){
        if(order.side=="BUY"){
            let askArr= this.ask;
            while(order.remainingQty>0 && askArr.length>0){
               let top = askArr[0];
               if(order.price>=top.price){
                  let buyQty= Math.min(order.remainingQty,top.remainingQty);
                  order.executedQty += buyQty;
                  order.remainingQty -= buyQty;

                  top.executedQty += buyQty;
                  top.remainingQty -= buyQty;
                  if(top.remainingQty<=0){
                    askArr.shift();
                  }

               } else{
                break;
               }
            }

        }else{
            let bidArr = this.bids;
             while(order.remainingQty>0 && bidArr.length>0){
               let top = bidArr[0];
               if(order.price<=top.price){
                  let buyQty= Math.min(order.remainingQty,top.remainingQty);
                  order.executedQty += buyQty;
                  order.remainingQty -= buyQty;

                  top.executedQty += buyQty;
                  top.remainingQty -= buyQty;
                  if(top.remainingQty<=0){
                    askArr.shift();
                  }

               } else{
                break;
               }
            }
        }
        return order;

    }
    _marketMatch(order){
        if(order.side==="BUY"){
            let askArr = this.ask;
            while(order.remainingQty>0 && askArr.length>0){
                let top=askArr[0];
                let buyQty = Math.min(order.remainingQty,top.remainingQty);
                order.remainingQty -=buyQty;
                order.executedQty += buyQty;

                top.remainingQty -=buyQty;
                top.executedQty += buyQty;
                if(top.remainingQty<=0){
                    askArr.shift();
                }
            }
            return order;

        }else{
              let bidArr = this.bids;
            while(order.remainingQty>0 && askArr.length>0){
                let top=bidArr[0];
                let buyQty = Math.min(order.remainingQty,top.remainingQty);
                order.remainingQty -=buyQty;
                order.executedQty += buyQty;

                top.remainingQty -=buyQty;
                top.executedQty += buyQty;
                if(top.remainingQty<=0){
                    askArr.shift();
                }
            }
            return order;
        }

    }
    getBook(){
        return {
            "ask": this.ask.map((a)=>[a.price,a.remainingQty]),
            "bids": this.bids.map((b)=>[b.price,b.remainingQty])
        }

    }
}

let BTCUSD = new Orderbook("BTC_USD");
BTCUSD.placeOrder( "BUY",
            "LIMIT",
            "100",
            10000,
            "Nitesh")

BTCUSD.placeOrder(
            "BUY",
            "LIMIT",
            "98",
            50,
            "Nitesh"
)
BTCUSD.placeOrder( "BUY",
            "LIMIT",
            "102",
            40,
            "Nitesh")
BTCUSD.placeOrder( "BUY",
            "LIMIT",
            "96",
            1000,
            "Nitesh")

console.log(BTCUSD.getBook());

BTCUSD.placeOrder( "SELL",
            "LIMIT",
            "105",
            10000,
            "Nitesh")

BTCUSD.placeOrder(
            "SELL",
            "LIMIT",
            "106",
            50,
            "Nitesh"
)
BTCUSD.placeOrder( "SELL",
            "LIMIT",
            "106",
            40,
            "Nitesh")
BTCUSD.placeOrder( "SELL",
            "LIMIT",
            "104",
            1000,
            "Nitesh")

console.log(BTCUSD.getBook());

BTCUSD.placeOrder( "BUY",
            "LIMIT",
            "104",
            100,
            "Nitesh")

console.log(BTCUSD.getBook());
BTCUSD.placeOrder( "BUY",
            "MARKET",
            null,
            100,
            "Nitesh")
console.log(BTCUSD.getBook());

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