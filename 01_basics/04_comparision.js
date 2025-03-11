//console.log("2" > true)

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);// in javascript equality check (==) and comparision (< , > , <= , >=) work differently
//comparision converts null into a number ,treating it as 0
//that's why output of null = 0 is false and null >=0 is true.
// this comparisions must be ignored for clean code



// === is used for strict check. it not only checks the value but also checks the datatype

