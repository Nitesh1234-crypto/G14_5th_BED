const fs=require("fs");
function myread(filepath){
    return new Promise((resolve,reject)=>{
        fs.readFile(filepath,"utf-8",function(err,data){
            if(err) return reject(err);
            let output=JSON.parse(data);
            resolve(output)
        })
    })
}
function mywrite(filepath,data){
    return new Promise((resolve,reject)=>{
        let res=JSON.stringify(data);
        // console.log(res);
        fs.writeFile(filepath,res,function(err){
            if(err) return reject(err);
            resolve("done");
        })
       
    })

}

module.exports.myread=myread;
module.exports.mywrite=mywrite;