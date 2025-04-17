const userName = []

if(userName){
    console.log("it is ok");
}
// there are some values which are considered as truthy or falsy values
//falsy = false , 0 , -0 , BigInt 0n , null , undefined , "", NaN
//truthy = true , any value in "",  " ",[],{},function(){}

//to check [](array)

if(userName.length === 0){
    //console.log("array is empty");
}
// to check empty object
const User = {}
if(Object.keys(User).length === 0){
    //console.log("Object is empty");
}

//Nullish coalescing operator(??): null undefined
 
let val1;
val1 = 10< ?? 15
val1 = null ?? 15<
val1= null ?? undefined<
val1 = null ?? 10< ?? 20
val1 = undefined ?? 10< ?? 20
console.log(val1);


//terniary operator
// syntax = condition ? true : false

const price = 100;
price <= 80 ? console.log("less than 80"): console.log("more than 80");

