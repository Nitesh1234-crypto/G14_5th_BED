let changecolorbtn= document.querySelector(".change-color");
let stopBtn= document.querySelector(".stop-color")
let body= document.querySelector("body")
console.log(changecolorbtn);
let id=null;
let colors=["red","orange","green","yellow","black","blue","purple","lime","cyan","grey"]
// setTimeout(()=>{
// chnageColor();
// },1000)
changecolorbtn.addEventListener("click",function(){
   id=setInterval(()=>{
         chnageColor();
    },500)
        // chnageColor();
})
function chnageColor(){
    let index= Math.floor(Math.random()*10)
    // console.log(index)
    let color=colors[index];
    body.style.background=color
}
stopBtn.addEventListener("click",function(){
    if(id){
        clearInterval(id)
    }
    
})