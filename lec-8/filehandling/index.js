const fs = require("fs");
//write
//you are creating a function writeFile()
// fs.writeFile("./demo.txt","",function(err){
//     if(err) return console.log(err)
//         console.log("data written")
// })
// fs.writeFile("./data.txt","hi",function(err){
//     if(err) return console.log(err);
//     console.log("written")
// })
// fs.appendFile("./data.txt","hello world",function(err){
//     if(err) return console.log(err);
//     console.log("updated")
// })

fs.readFile("./data.txt","utf-8",function(err,data){
    if(err) return console.log(err);
    console.log(data)
})