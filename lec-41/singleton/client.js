const Principal = require("./principal");

function suspendStudent(name){
    let principal = Principal.getPrincipal();
    principal.suspend(name);
}
function removeSuspension(name){
    let principal =Principal.getPrincipal();
    principal.removeSuspension();
}