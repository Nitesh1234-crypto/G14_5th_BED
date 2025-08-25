//accessing dom element
//1.using id;

// let el1= document.getElementById("homeTitle");
// console.log(el1);
// //2. using className

// let el2=document.getElementsByClassName("user-item");
// console.log(el2[2])
// let el3=document.getElementsByClassName("user-list-heading")
// console.log(el3); //collection
// console.log(el3[0]); //element

// //3 . tag name
// let el4= document.getElementsByTagName("p");
// console.log(el4);//collection

//4.querySelector

let el5=document.querySelector("#homeTitle");
console.log(el5);

let el6 = document.querySelector(".user-item");
let el7=document.querySelectorAll(".user-item");
let userList=document.querySelector(".user-list")
console.log(el6);
console.log(el7);
let el8=document.querySelector("p")
console.dir(el8)

//properties
//1.innerText
//2.innerHtml
//3.textContent
//content get
let content=el8.innerText
console.log(content);
let userlistcontent=userList.innerText
console.log(userlistcontent);
let userlistcontent2=userList.innerHTML;
console.log(userlistcontent2);
//content set
el8.innerText="set using javascript"
// userList.innerText=`<li>User one</li>
//                     <li>User Two</li>`
userList.innerHTML=`<li>User one</li>
                    <li>User Two</li>`


/*
parent 
child
siblings
*/