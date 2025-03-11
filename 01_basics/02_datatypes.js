"use strict";// treat all js code as newer version

//alert(3 + 3); // we are using nodejs, not browser
let name = "koushik"
let age = 25
let isLoggedIn = false

//primitive datatypes
//number = 2 to the power 53
//bigint
//string => ""
//boolean => true/false
//null =>stand alone value
//undefined =>
// symobl =>for unique

let id = Symbol(123)
let anotherId = Symbol(123)
//console.log(id === anotherId);// Symbol datatypew is used to make a value unique

//Non-primitive datatypes
//Array
let heros = ["superman" , "batman" , "spiderman"]

//object
let myObj = {
    name: "koushik",
    age: 25,
}

//functions
const myFunction = function(){
    console.log("Hello world")
}

//object

// console.log(typeof null)// output- object cause null is a object
// console.log(typeof undefined)// output - undefined
// console.log(typeof "symbol")