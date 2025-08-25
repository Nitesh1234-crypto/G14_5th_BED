/*
getAttribute
setAttribute
classList
*/
let h1= document.querySelector("h1");
console.dir(h1.classList);
h1.classList.add("mahadev")
// h1.classList.remove("hello");
h1.classList.toggle("jai");
h1.classList.toggle("hi");
console.log(h1.classList.contains("hello"))