// let todos=[
//     {
//         id:"1",
//         title:"watch tv and relax between 6-8pm",
//         status:"pending" 
//     },
//      {
//         id:"2",
//         title:"study web developemt at 8 pm",
//         status:"pending" 
//     },
//      {
//         id:"3",
//         title:"study recurrsion on 10pm",
//         status:"pending" 
//     }

// ]
let ul = document.querySelector("ul")
async function getTodo(){
    try {
    // let response=await fetch("https://jsonplaceholder.typicode.com/todos")
     let response=await fetch("http://localhost:5565/todos")
    //  console.log(response);
    let result=await response.json()
    // console.log(result.data)
    showAllTodos(result.data)
        
    } catch (error) {
        console.log(error.message)
    }
  

}
getTodo();
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
// showAllTodos(todos)


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