//singlton
//object.
//objects literals

const mySym = Symbol("Key1")
const jsUser = {
    name: "koushik",
    age: 25,
    "full name" : "koushik chowdhury",
  // mySym : "myKey1",//wrong syntax
   [mySym] : "mykey1",// right syntax and to refer a symbol
    location:"kharagpur",
    email: "kushch@gmail.com",
    isLoggedin : true,
    logInDate : ["monday" , "thursday"]
}
console.log(jsUser.name);  
console.log(jsUser["name"]);  //both ways we can access name
console.log(jsUser["full name"]);//only way to access full name
console.log(jsUser.mySym);// showing as a string but not a symbol because wrong syntax
console.log(jsUser[mySym])
console.log(typeof jsUser[mySym]);

console.log(jsUser);
//we can changer the values inside the object by assinging  a new value
jsUser.email = "kushraj@love.com"
console.log(jsUser);
//we can also freeze the values inside the object and it can't be changed
Object.freeze(jsUser)
jsUser.email = "kushchow@yahoo.com"
console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello js user");
}
jsUser.greeting2 = function(){
    console.log(`Hello js user , ${this.name} and your age is ${this.age}`)// using "this" operator to access "jsUser" inside a function
}
console.log(jsUser.greeting());
console.log(jsUser.greeting2());
