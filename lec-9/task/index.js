const fs=require("fs");

fs.readFile("../userdata.json","utf-8",function(err,data){
    if(err) return console.log(err);
    let users1=JSON.parse(data);
    fs.readFile("../userdata2.json","utf-8",function(err,data){
        if(err) return console.log(err);
        let users2= JSON.parse(data);
        //spread operator
        // let arr=[1,3,4,4,56]
        // console.log(...arr)
        // console.log(...users1)
        // let allusers=[...users1,...users2];
        let allusers= users1.concat(users2);
        fs.writeFile("../alluserdata.json",JSON.stringify(allusers),function(err){
            if(err) return console.log(err);
            console.log("task done!!")
        })

    })
})

// let data1=fs.readFileSync("../userdata.json","utf-8");
// let data2=fs.readFileSync("../userdata2.json","utf-8");
// let users1=JSON.parse(data1);
// let users2=JSON.parse(data2);
// let allusers=[...users1,...users2];
// try {
//    fs.writeFileSync("../syncallusers.json",JSON.stringify(allusers));
//   console.log("task done")
// } catch (error) {
//     console.log(err)
// }
console.log("hi")

