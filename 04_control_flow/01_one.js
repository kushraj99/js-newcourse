// score = 200
// if(score > 100){
//     const power = "fly"
// }
// console.log(`user power is : ${power}`); // power is in the block scope it can't be accessed outside


// const balance = 1000
//if(balance > 500) console.log("done"), // not a goood way to write
//console.log("done1");// implicit scope

// if(balance <500){
// console.log("less than 500");
// }else if(balance < 750){
//     console.log("less than 750");
// }else{
//     console.log("less than 1200")
// }

const userLoggedIN = true
const debitCard = true
const loggedFromGoogle = false
const loggedFromchrome = true 

if(userLoggedIN && debitCard){
    console.log("Allow to buy");

}
if(loggedFromGoogle || loggedFromchrome){
    console.log("allow to log in");
    
}