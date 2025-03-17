//dates

let myDate = new Date()
console.log(myDate);// output = 2025-03-17T06:49:12.415Z
console.log(myDate.toString());  //output = Mon Mar 17 2025 06:50:20 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());//output = Mon Mar 17 2025
console.log(myDate.toLocaleTimeString());// putput = 6:53:09 AM
console.log(myDate.toLocaleDateString());//output = 3/17/2025
console.log(typeof myDate); // output = object


let myOtherdate = new Date(2025, 2 , 22, 18 , 25)
console.log(myOtherdate.toLocaleString());//output = 3/22/2025, 12:00:00 AM
let otherDate = new Date("2025-02-22")
console.log(otherDate.toLocaleString());// output = 2/22/2025, 12:00:00 AM

let timeStamp = Date.now()
console.log(timeStamp);//output = 1742195001471 milisecond
console.log(otherDate.getTime());
console.log(otherDate.getSeconds());
console.log(Date.now()/1000); //output = 1742195567.041
console.log(Math.floor(Date.now()/1000));//1742195670
console.log(Math.round(Date.now()/1000));//1742195671

let urDate = new Date()
console.log(urDate);
console.log(urDate.getDay());
console.log(urDate.getMonth());

console.log(`the day is ${urDate.getDay()} and the month is ${urDate.getMonth()}`);

urDate.toLocaleString(`default`, {
    weekday: "long", 
})















