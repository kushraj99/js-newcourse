
// //object.create

// //objects literals
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


//singlton objects***************************

const tinderUser = new Object()
tinderUser.id = "abc123"
tinderUser.name = "kush"
tinderUser.gender = "male"

//console.log(tinderUser)

const user = {
    name: {
        fullname : {
            userfullname : {
                firstname : "koushik",
                lastname : "chowdhury"
            }
        }
    }
}
//console.log(user.name.fullname.userfullname);


const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

const obj3 = {obj1,obj2}
console.log(obj3)

const obj3 = Object.assign(obj1 , obj2)// this is a way to merge multiple objects
console.log(obj3);

const obj3 = {...obj1, ...obj2}
console.log(obj3);

const user1 = [
    {
    id : 1,
    email: "k@gmail.com"
},
{
    id : 2,
    email: "kc@gmail.com"
},
{
    id : 3,
    email: "kj@gmail.com"
}
]

console.log(user1[2].email);// this the way by which we can accses any "key" of a object from array of objects


console.log(tinderUser);
console.log(Object.keys(tinderUser));// by this we can get to know the key in an object
console.log(Object.values(tinderUser));// by this we can know the values in an object
console.log(Object.keys(tinderUser).length)//by this we can know the length of an object
console.log(Object.entries(tinderUser));// it helps to make the keys into an array
console.log(tinderUser.hasOwnProperty(`gender`))//to check if the given value in present in the object or not


//DESTRUCTURE*******************

const course = {
    coursename : "js new course",
    price : 999,
    courseStudent : "koushik"
}
const {courseStudent : student} = course
console.log(student);

//API**********

{
    "name": "koushik",
    "courseName": "js new course",// Api as objects
    "price" : "free"
}

[
    {},
    {},  //API as arrays
    {}
]
