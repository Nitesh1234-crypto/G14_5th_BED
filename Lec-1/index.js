// let hello= document.getElementsByClassName("hello");
// console.log(hello);

console.log("Hello world")
function delay(){
    let currtime= new Date().getTime()
    // while(new Date().getTime() - currtime <4000){

    // }
    console.log("delay done")
}
// delay();
setTimeout(delay,0)
console.log("bye")
function sum(a,b){
    console.log(a+b)
}
sum(2,3);
sum(5,6);
sum(6,7);
console.log("hnji");

//create a function which return a promise to multiply two number 
//a and b if a>10;

function mul(a,b){
   return new Promise((resolve,reject)=>{
        if(a>10) {
            resolve(a*b)
        }
        else{
        reject("a is less than 10")
        }
   }) 
}
mul(5,6).then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err)
})