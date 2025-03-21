function myName(){
    console.log("k");
    console.log("o");
    console.log("u");
    console.log("s");
    console.log("h");
    console.log("i");
    console.log("k");
}
//myName()// we need to give"()" in order to execute

function sumNumbers(number1 , number2){//number1 and number2 are called parameters
    console.log(number1 + number2);
    
}
// sumNumbers(3,4)// 7 // 3 and 4 are called arguments
// sumNumbers(3,"4")//34
// sumNumbers(3,"a")//3a
// sumNumbers(3,null)//3

// function addNumbers(num1 , num2){
//     console.log(num1 + num2);
// }

// const result = addNumbers(3,4)
// console.log("result: " , result);// undefined cause this function is not returning any value its just printing

function addNumbers(num1 , num2){
    // let result = num1 + num2
    // return result
    return num1 + num2// both ways we can write
}

const result = addNumbers(3,4)
//console.log("result: " , result);

// function logInUser(username){
//     return`${username} is logged in`
// }
// //console.log(logInUser("koushik"))// koushik is logged in
// //console.log(logInUser(" "))//   is logged in
// console.log(logInUser())//undefined is logged in

function logInUser(username = "kush"){
    if(username === undefined){
console.log("please enter a username");
return
    }
    return`${username} is logged in`
}
//console.log(logInUser("jhuma"))


function calculateCartPrice(...num1){ //... is a rest/spread operator , used for passing multiple values
    return num1
}
//console.log(calculateCartPrice(200 , 400, 500 , 600));// [ 200, 400, 500, 600 ]

//passing object in a function

const user = {
    userName : "koushik",
    price : 199
}
function handleObject(anyObject){
    //console.log(`username is ${anyObject.userName} and price is ${anyObject.price}`);
    
}
//handleObject(user)
handleObject({
    userName : "kush",// by this we can pass any object
    price : 5999
})

const myArr = [100,200,300,400]

function returnsecondarray(getArray){
    return getArray[1]
}
//console.log(returnsecondarray(myArr))
console.log(returnsecondarray([3456,547,235,5687]))