const fs = require("fs");
let users=[{
    id:1,
    name:"Nitesh",
    email:"Nitesh1234@gmail.com",
    address:"delhi",
    password:"12345"
},
{
    id:2,
    name:"Ritik",
    email:"Ritik1234@gmail.com",
    address:"faridabad",
    password:"12345re"
}
]

fs.writeFile("./userdata.json",JSON.stringify(users),function(err){
    if(err) return console.log(err);
    console.log("user data written");
})

