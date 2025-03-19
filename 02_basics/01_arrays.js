// //array
// const myArr = [1 , 2 , 3 , 4 , 5 , 6]
// const myNames = ["raju" , "kush" , "koushik"]
// const Arr2 = new Array(1, 2, 3, 4)
// // console.log(myNames[2]);

// //************* ARRAY METHODS*** */

// myArr.push(8 , 9)// to add numbers into the array
// myArr.pop()// to remove number from the array from last
// myArr.unshift(9 ,10)//to add numbers in the begining of the array
// myArr.shift()// to remove a number from the starting position of the array

// console.log(myArr.includes(4));// to check weather the number is in the array or not
// console.log((myArr.indexOf(4)));// the check the index number in the array of the given number

// const newArr = myArr.join()// converts the array into string and bind them
// console.log(myArr);
// console.log(newArr);
// console.log(typeof(newArr));

// //SLICE and SPLICE
// console.log("A" , myArr);

// const newArr1 = myArr.slice(1,3)// return a copy of a section of array and do not make any changes in the original array
// console.log(newArr1);
// console.log("B" , myArr);

// const newArr2 = myArr.splice(1,3)// remove the elements of the array but also changes the original array
// console.log("c" , myArr);
// console.log(newArr2);

// const heros1 = ["spiderman","hulk", "ironman"]
// const heros2 = ["batman", "superman", "flash"]

// heros1.push(heros2)// just add the 2nd array(as a single element) into the 1st array
// console.log(heros1);

// const newHeros = heros1.concat(heros2)//merge two arrays and returns a new array(we can merge only 2 arrays)
// console.log(newHeros);

// const allNewHeros = [...heros1, ...heros2]// spread operator - also merges two arrays and returns a new array but merge two or more arrays
// //console.log(allNewHeros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_array = another_array.flat(Infinity)
console.log(real_array);





// console.log(Array.isArray("koushik"));// to check weather the given value is array or not
// console.log(Array.from("raju"))// to convert the given values into an array
// console.log(Array.from({name : "kush"}))// it cannot convert it into an array and returns a empty array 
// //because we need to define on what we need the array weather it  isan array of keys or an array of values

// const score1 = 100
// const score2 = 200
// const score3 = 300

// console.log(Array.of(score1,score2,score3));// take the defined values and a new array after concanating them

