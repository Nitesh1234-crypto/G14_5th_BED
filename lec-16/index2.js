/*
inserting a new Element on dom using javascript
1. create a new Element for eg "li" using createElement function
2. insert content in that element using either innerText or innerHtml
3. insert that element in parent container using appendChild function
*/
let ul = document.querySelector("ul");
// function addTodo(){
//     let li = document.createElement("li");
//     li.innerHTML = `Todo 4
//             <button>❌</button>`
//     ul.appendChild(li)
// }
// let todo={
//     id:"1",
//     title:"play at 8 pm today",
//     status:"pending"
// }
let todos=[
    {
        id:"1",
        title:"watch tv and relax between 6-8pm",
        status:"pending" 
    },
     {
        id:"2",
        title:"study web developemt at 8 pm",
        status:"pending" 
    },
     {
        id:"3",
        title:"study recurrsion on 10pm",
        status:"pending" 
    }

]
function showAllTodos(todos){
    todos.forEach(todo => {
        addTodo(todo)
    });
}
function addTodo(todo){ //object-->object.title
    let li = document.createElement("li");
    li.innerHTML = `${todo.title}
            <button>❌</button>`
    // ul.appendChild(li)
    ul.prepend(li)
}
// addTodo(todo);
showAllTodos(todos)


let todoInput=document.querySelector(".todoInput");
let todoForm= document.querySelector(".todo-form");
todoForm.addEventListener("submit",function(ev){
    ev.preventDefault();
    let title= todoInput.value ;
    console.log(title);
    let todo={
        id:Math.floor(Math.random()*1000000),
        title:title,
        status:"pending"
    }
    // console.log(todo)
    // todos.push(todo);
    // console.log(todos)
    addTodo(todo)
    todoForm.reset()

})