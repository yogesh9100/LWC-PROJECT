let myDetails = "my name is yogi";
console.log("myDetails", myDetails);
//length of string
console.log("myDetails", myDetails.length);

//extracting string
let text = "apple, banana, kiwi,";
console.log(text);

//slice(start position, end position+1) (end not included)
//substring(start position, end)
//substr(start position, length)

let slicebanana = text.slice(7,13);
console.log("sliceBanana", slicebanana);

let sliceRemainingFruits = text.slice(7);
console.log("sliceRemainingFruits", sliceRemainingFruits);

//slice with negative start position
let part = text.slice(-12);
console.log(part);

//substring(start position, end)
// in substring if you pass negative value in position it will be treated as zero(0)
let substringbanana = text.substring(7,13);
console.log("substringBanana", substringbanana);

let partsubstring = text.substring(-12);
console.log(partsubstring);

//substr(start position, length)
let substrbanana = text.substr(7,6);
console.log("substrbanana ", substrbanana);

//replace
// replace will only replace the first match
// replace is case sensitive
// replace will not modify existing string

let newFruitsText = text.replace("banana","mango");
console.log("newFruitsText", newFruitsText);
console.log("text",text);

//uppercase and lowercase
console.log(myDetails);
console.log(myDetails.toUpperCase());
console.log(myDetails.toLowerCase());

//concat
let text1 = "hello";
let text2 = "js";
let text3 = text1.concat("","world");
let concatenationstring = '${text1} ${text2}';
console.log("concatenationstring", concatenationstring);
console.log("text3", text3);

//trim(),trimStart(), trimEnd()
let trimMe = "     Hello World       ";
console.log(trimMe.trim());
console.log(trimMe.trimStart());
console.log(trimMe.trimEnd());

//padstart , padEnd

let myNumber = "5"; //****5
console.log(myNumber.padStart(5,"0"));
console.log(myNumber.padEnd(2,"$"));

//split==> convert string into array

let mycsvDetails = 'sai yogi suri manoj';
let mycsvDetailsArray = mycsvDetails.split(" ");
console.log("mycsvDetailsArray", mycsvDetailsArray);

//convert array to string
//to string
//join

let myToString = mycsvDetailsArray.toString();
console.log("myToString", myToString);

let joinString = mycsvDetailsArray.join(" ");
console.log("joinString", joinString);

//search the string(search,match)
//indexof = return the index position of a string
  //        = return -1(string not present)
//includes = if present return true else return false
console.log(text);
console.log(text.indexOf("banana"));
console.log(text.indexOf("mango"));
console.log(text.includes("banana"));
console.log(text.includes("mango"));

//startswith()
//endswith()
console.log(text.startsWith("apple"));
console.log(text.endsWith("kiwi"));
