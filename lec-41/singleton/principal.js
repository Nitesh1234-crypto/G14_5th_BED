class Principal{
     instance = null
    _constructor(name){
        this.name=name;
    }
    static getPrincipal(){
        if(!instance){
        let principal = new Principal("Nitesh");
        instance=principal;
        }
        return instance;
    }

    resticate(name){
        console.log("resticate student name:"+name)
    }
    suspend(name){
         console.log("suspend student name:"+name)
    }
    notify(message){
        console.log(message)
    }
    removeSuspension(name){
        console.log("suspension removed")
    }
}

module.exports=Principal;