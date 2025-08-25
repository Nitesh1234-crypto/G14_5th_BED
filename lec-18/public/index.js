let todoForm= document.querySelector("#todoForm");
let todoTitle= document.querySelector(".todo-title")

todoForm.addEventListener("submit",async function(ev){
    ev.preventDefault();
    let data= {
        title:todoTitle.value
    }
  let serverData= await sendPostRequest("/todos",data)
    if(serverData.success){
        alert(serverData.message)
    }else{
        alert("something went wrong")
    }
    // console.log(serverData);
    todoForm.reset()
})
async function sendPostRequest(endPoint,data){
     let response=await fetch(endPoint,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "content-type":"application/json"
        }
    })
    let serverData=await response.json();
    return serverData;

}
