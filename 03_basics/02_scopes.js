//when "{}" comes with function or any conditional it is called scope
// but in object "{}" is used for object declaration
//everything in the "{}" is called block scope and everything outside the "{}" is called global scope

let a=300
// if(true){
//     let a = 10
//     const b = 20
//     //console.log("INNER : ",a);   
// }

//console.log(a);

// child function can access the parent function bot not vice versa
function one(){
    const username = "koushik"
    function two() {
        const website = "youtube"
        //console.log(username);   
    }
//console.log(website);
two()
}
one()

if(true){
    const name ="koushik"
    if (name  == "koushik") {
        const website = " youtube"
        //console.log(name + website);
    }
//console.log(website);

}
//console.log(name);

//concept********************
addone(5)
function addone(num) { // when we  only declare function we can access it before declaration
    return num + 1
}

addtwo()
const addtwo = function (num) {  //when we declare function in a variable we can't access it before declaration
    return num + 2
}
