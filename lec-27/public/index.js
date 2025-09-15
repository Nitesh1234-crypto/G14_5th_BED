let signupForm= document.querySelector("#signup");
let signupUserName= document.querySelector("#signup-username");
let signupEmail= document.querySelector("#signup-email");
let signupPassword= document.querySelector("#signup-password");

signupForm.addEventListener("submit",async function(e){
    e.preventDefault();
    let usernameValue= signupUserName.value ;
    let userEmailValue= signupEmail.value;
    let userPasswordValue= signupPassword.value;
     let response=await fetch("/api/users/",{
                        method:"POST",
                        body:JSON.stringify({
                            username:usernameValue,
                            email:userEmailValue,
                            password:userPasswordValue
                        }),
                        headers:{
                            "content-type":"application/json"
                        }
                    })
    let data= await response.json();
    console.log(data);
    if(data.success){
        alert("user added successfull, please login to continue");
    }else{
        alert("something went wrong")
    }
    


})
let loginForm= document.querySelector("#login");
let loginEmail= document.querySelector("#login-email");
let loginPassword= document.querySelector("#login-password");
loginForm.addEventListener("submit",async function(e){
    e.preventDefault();
    let userEmailValue= loginEmail.value;
    let userPasswordValue= loginPassword.value;
     let response=await fetch("/api/auth/login",{
                        method:"POST",
                        body:JSON.stringify({
                            email:userEmailValue,
                            password:userPasswordValue
                        }),
                        headers:{
                            "content-type":"application/json",
                        }
                    })
    let data= await response.json();
    console.log(data);
    if(data.success){
        alert("login successfull");
        let token=data.token;
        localStorage.setItem("token",token)
    }else{
        alert("something went wrong")
    }
    


})