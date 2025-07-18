// function starter(cb)
// {
//     console.log("starter order")
//     setTimeout(()=>{
//         console.log("starter served")
//         cb(sweets)
//     },1000)

// }
// function maincourse(cb){
//  console.log("maincourse order")
//     setTimeout(()=>{
//         console.log("maincourse served")
//         cb(bill)
//     },3000)
// }
// function sweets(cb){
//  console.log("sweets order")
//     setTimeout(()=>{
//         console.log("sweets served")
//         cb()
//     },500)
// }
// function bill(){
//  console.log("your bill is")
//     setTimeout(()=>{
//         console.log("bill payed")
//     },20)
// }
function starter(cb)
{
    console.log("starter order")
    setTimeout(()=>{
        console.log("starter served")
        cb()
    },1000)

}
function maincourse(cb){
 console.log("maincourse order")
    setTimeout(()=>{
        console.log("maincourse served")
        cb()
    },3000)
}
function sweets(cb){
 console.log("sweets order")
    setTimeout(()=>{
        console.log("sweets served")
        cb()
    },500)
}
function bill(cb){
 console.log("your bill is")
    setTimeout(()=>{
        console.log("bill payed")
        cb()
    },20)
}

//1. starter-->maincourse-->sweets--->bill
// starter(maincourse)
// maincourse()
// sweets()
// bill();
starter(function(){
    maincourse(function(){
        sweets(function(){
            bill(function(){
                console.log("ghr chlte hai")
            })
        })
    })
})
//2. starter ---->sweets-->maincourse-->bill
// starter(sweets)