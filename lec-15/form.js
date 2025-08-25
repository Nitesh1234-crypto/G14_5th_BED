const form = document.querySelector(".addTodoForm");
const titleInput=document.querySelector(".todo-title")
const body=document.querySelector("body");
console.log(form);
console.log(titleInput);
form.addEventListener("submit",function(ev){
    ev.preventDefault();
    let title=titleInput.value ;
    console.log(title)
    //do your work with input value;
    form.reset()

})
body.addEventListener("click",function(ev){
    // console.log(ev.target);
    let className=ev.target.classList;
    if(className.contains("delete")){
        console.log(ev.target.parentElement.parentElement.remove())
    }
})

