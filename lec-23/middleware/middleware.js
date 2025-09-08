function m1(req,res,next){
    console.log("running middleware one");
    next()
}
function m2(req,res,next){
    console.log("running middleware two")
    next();
}
function m3(req,res,next){
    console.log("running middleware Three")
    next();
}
module.exports.m1=m1;
module.exports.m2=m2;
module.exports.m3=m3;