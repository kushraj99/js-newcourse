//immediately invoked function expression(iife)

//there is a problem of the pollutions of global scope so in oreder remove that variables or any declaration
// in that global scope we use "iife"

(function (){  
    console.log("DB connected");
})();

( ()=> {  
    console.log("DB connected 2");
})();

( (name)=>{  
    console.log(`DB connected to ${name}`);
})("koushik")