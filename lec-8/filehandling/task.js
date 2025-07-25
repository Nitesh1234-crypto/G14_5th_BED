const fs= require("fs");

fs.readFile("./data.txt","utf-8",function(err,data1){
    if(err) return console.log(err)
        fs.readFile("./demo.txt","utf-8",function(err,data2){
            if(err) return console.log(err);
                fs.writeFile("./alldata.txt",data1+data2,function(err){
                    if(err) return console.log(err);
                    console.log("task completed")
            })
    })

})

