const user = {
    username : "koushik",
    price : 1000,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website `);
        console.log(this);

        
    }
}
// user.welcomeMessage()
// user.username = "kush"
// user.welcomeMessage()

console.log(this); // empty object

// const chai = function(){
//     let username = "koushik"
//     console.log(this.username);// undifined
    
// }
// //chai()

const chai = () => { // syntax of arrow function
    let username = "koushik"
    console.log(this.username);// undifined
    
}
//chai()

// const addtwo = (num1, num2) => {  // explict return - return key is used
//     return num1 + num2
// }
// console.log(addtwo(3,4));

//const addtwo = (num1, num2) =>  num1 + num2 // implicit return - return key is not used
//const addtwo = (num1, num2) =>  (num1 + num2)
const addtwo = (num1, num2) =>  ({username : "koushik"})
console.log(addtwo(3,4));

