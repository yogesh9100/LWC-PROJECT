console.log("Logical Operators");
let myNumber1 = 10;
let myNumber2= "20";
console.log(typeof myNumber1, typeof myNumber2);
if(isNaN(myNumber2)){
    console.log("myNumber2 is not a number");
}else{
   
console.log(myNumber1 + Number(myNumber2)); 
}

let myNumber3 = "30";
let myNumber4 = 20;
console.log(typeof myNumber3, typeof myNumber4);
console.log(myNumber3-myNumber4);
console.log(myNumber3+myNumber4);
console.log(myNumber3*myNumber4);
console.log(myNumber3/myNumber4);



//Assignment  "=", "==',"==="//
let myNumber5 = 10;
 myNumber5 = 10;

 // comparasiom

 let myNumber6 = 10;
 let myNumber7 = 20;
 console.log(myNumber6>myNumber7);
 console.log(myNumber6<myNumber7);
//logical //

console.log(myNumber6 >0 && myNumber6 > 5 );

let myString1 = "yogi";
let myString2 = "yogesh";
console.log(myString1 && myString2);
console.log(myString1 || myString2);

let isSalaryCredited = false;
console.log("isSalaryCredited", isSalaryCredited);
isSalaryCredited = !isSalaryCredited;
console.log("isSalaryCredited", isSalaryCredited);

let age = 21;
 let output = age < 18 ? " too young" : "old enough";
console.log(output);

let number10 = 3;
let number11 = 3;
console.log(typeof number10, typeof number11);
console.log(number10,number11);
console.log(number10 == number11);
console.log(number10 === number11);

let myString10 = null;
let myString11;
console.log(typeof myString10, typeof myString11);
console.log(myString10 == myString11);
console.log(myString1 === myString11);