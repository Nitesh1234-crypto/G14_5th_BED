function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function mul(a,b){
    return a*b
}
// let obj={
//     a:"hi",
//     b:10
// }
// obj.c=30;
// console.log(obj);
// console.log(add(2,3));
console.log("util",module.exports);
// module.exports.add2=add2;
// module.exports.sub=sub;
// module.exports.mul=mul;
// console.log("util",module.exports)
//alternate ways to export
module.exports={
   add,
   sub,
    mul
}
// console.log({}=={});