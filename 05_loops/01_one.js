for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 7){
        // console.log("7 is the best number");
    }
    // console.log(element);
}


for (let i = 0; i <= 1000; i++) {
    // console.log(`for value ${i} the table is : `);
    
   for (let j = 0; j <= 1000; j++) {
    // console.log(`iner loop value : ${j}`);
    // console.log(i + '*' + j + '=' + i*j);
    
   }

}

let Arr = ["koushik" , "jhuma" , "kush"]
for (let i = 0; i < Arr.length; i++) {
    const element = Arr[i];
    console.log(element);
    
}

//break and continue

// for (let index = 1; index <= 20; index++) {
//     if(index == 7){
//         console.log("numbre 7 detected");
//         break;
//     }
//     console.log(`value of i is ${index}`);
    
    
// }
for (let index = 1; index <= 20; index++) {
    if(index == 7){
        console.log("numbre 7 detected");
        continue;
    }
    console.log(`value of i is ${index}`);
    
    
}