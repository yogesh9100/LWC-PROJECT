console.log("Week2 Assignment");
/*
Write a function that takes a string as input and returns a new string with the first letter of each word capitalized.

Example:
Input: "hello world"
Output: "Hello World*/

const capitalizedFirstLetter=((inputstring)=> {
let convertedArray=inputstring.split(" ");
//map method iterate array and return in an array//slice will add rem to string
let convertedMap=convertedArray.map(currItem =>currItem[0].toUpperCase()+currItem.slice(1));

//convert arry to string
let resultString=convertedMap.join(" ");
console.log(convertedArray);
console.log(convertedMap);
console.log(resultString);


});

capitalizedFirstLetter("hello world i am new to javascript");

let capitalfirstalphabet=inputstring1=>
(inputstring1).
split(" ").
map(currItem1=>currItem1[0].toUpperCase+currItem1.slice(1)).
join(" ");

capitalizedFirstLetter("this is from arrow function");

/*

Problem 2:
Write a function that takes a string as input and returns the reverse of the string, maintaining the case of each character.

Example:
Input: "Hello World"
Output: "dlroW olleH"*/


const reverseStringwithCase=(inpustring2)=>{
  let inputArray=inpustring2.split("");
  console.log("inputArray",inputArray);
  let reversalArray=inputArray.reverse();
  console.log("reversalArray",reversalArray);
let output=reversalArray.join("");
console.log(" outputreversalArray",output);
};
reverseStringwithCase("Hello World");

const reversalArrayfn= (inpustring3) =>{
let resArray4=inpustring3.split("").reverse().join("");

  console.log("resArray2",resArray4);
}
reversalArrayfn("Abc def");


/*
Write a function that takes a string as input and returns the number of occurrences of each character in the string as an object.

Example:
Input: "hello"
Output: { h: 1, e: 1, l: 2, o: 1 }*/


const councharFun=(inputstring3)=>{
let output={};
console.log("inpustring3",inputstring3.split(""));
let inputArr1=inputstring3.split("");
for(let currItem2 of inputArr1){
  console.log("inpustring3",currItem2);

  if(output.hasOwnProperty(currItem2)){
    output[currItem2]=output[currItem2]+1;
  }
  else{
    output[currItem2]=1;
  }
}
console.log("ouput",output);
};
councharFun("hello");


/*
Write a function that generate the username of the user based on Firstname, Middlename and Lastname
Input - ankit Dilipji Jain
Output - ADJ*/

const funcUserName=(inputstr1)=>{
  let  upperCase=inputstr1.toUpperCase();
  console.log("upperCase",upperCase);
  let inputArr1=upperCase.split(" ");
  console.log("inputArr1",inputArr1);
  let initialPos=inputArr1.map((curItm)=>curItm[0]);

  console.log("initialPos",initialPos);
  let joinstr=initialPos.join("");
  console.log("joinstr",joinstr);
};

funcUserName("input str1");

const uprfun=inpstr=>
  inpstr.toUpperCase().split("").map((curitem)=>(curitem[0]
)).join("");

uprfun("Akit Jain");



/*
Write a function that takes an array of numbers as input and returns a new array with all the even numbers removed.

Example:
Input: [1, 2, 3, 4, 5, 6]
Output: [1, 3, 5]*/









/*
Problem :
Write a function that takes an array of strings as input and returns a new array with only the strings that have a 
length greater than or equal to 5.

Example:
Input: ["apple", "banana", "grape", "orange", "kiwi"]
Output: ["apple", "banana", "orange"]











/*
Write a function that takes an array of numbers as input and returns a new array with only the unique elements (remove duplicates).

Example:
Input: [1, 2, 2, 3, 4, 4, 5]
Output: [1, 2, 3, 4, 5]
*/

/*Write a function that takes a string as input and returns a new string with the first letter of each word capitalized.

Example:
Input: "hello world"
Output: "Hello World*/





/*Problem 2:
Write a function that takes a string as input and returns the reverse of the string, maintaining the case of each character.

Example:
Input: "Hello World"
Output: "dlroW olleH"*/





  /*Write a function that takes a string as input and returns the number of occurrences of each character in the string as an object.

Example:
Input: "hello"
Output: { h: 1, e: 1, l: 2, o: 1 }*/




  
/*Write a function that takes an array of numbers as input and returns a new array with all the even numbers removed.

Example:
Input: [1, 2, 3, 4, 5, 6]
Output: [1, 3, 5]
*/


  
  /*Problem :
Write a function that takes an array of strings as input and returns a new array with only the strings that have a 
length greater than or equal to 5.

Example:
Input: ["apple", "banana", "grape", "orange", "kiwi"]
Output: ["apple", "banana", "orange"]*/


  
  
/*Write a function that takes an array of numbers as input and returns a new array with only the unique elements (remove duplicates).

Example:
Input: [1, 2, 2, 3, 4, 4, 5]
Output: [1, 2, 3, 4, 5]
*/
