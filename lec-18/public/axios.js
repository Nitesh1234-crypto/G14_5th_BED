console.log(axios);
async function getData(){
    let response= await axios.get("https://jsonplaceholder.typicode.com/users")
    console.log(response.data)
}
getData()