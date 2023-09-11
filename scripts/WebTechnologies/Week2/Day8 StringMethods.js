console.log("String And Array Methods");

let MyDetails="My Name is SirishaRani";
//length of string
console.log("mydetails lenght",MyDetails.length);

//Extracting string
let text="Apple, Banana,Banana,Kiwi";
console.log(text);

//slice(start position,end position) (end not included)
//add +1 to the end position so we can get correctly
//substring(start,end)
//substr(start position,length)

let sliceBanane=text.slice(7,13);
console.log("sliceBanane",sliceBanane);
let sliceRemianingFruits=text.slice(7);
console.log("sliceRemianingFruits",sliceRemianingFruits);

//sliec with negative start position
// i.e str starts from 0 possition on and starts from negative index from last side of string
let part=text.slice(-12);
console.log("part",part);

//substring(start position,end) in substring if you pass negative value in positions it will be treated as Zero(0)
let substrbanana=text.substring(7,13);
console.log("substrbanana",substrbanana);

let partSubString=text.substring(-12);
console.log("partSubString",partSubString);


//substr(start position,length) extract 6 characters from the 7th positin
let substrBanana=text.substr(7,6);
console.log("substring",substrBanana);

//replace
//replace will only replace first match
//replace is case senistive
//replace will not modify existing string

let newFruitsText=text.replace("Banana","Mango");
console.log("newFruitsText Banana replacing Mango 1st place ",newFruitsText);
console.log("textt",text);

//toUpperCase
console.log(text);
console.log("To Upper Case",text.toUpperCase());
console.log("To Upper Case",text.toLowerCase());

//Concatenation -->String Interpolation and str1.concat("str2")re
let text1="Hello";
let text2="World";
let ConcatenatedString=`${text1}${text2}`;
console.log("ConcatenatedString",ConcatenatedString);
let concatanothermethod=text1.concat("world");
console.log("concatanothermethod",concatanothermethod);
let concatanothermethodaddedspace=text1.concat("","World");
console.log("concatanothermethodaddedspace",concatanothermethodaddedspace);

//trim(),trimStart(),trimEnd()
//trim() -->Trim Method will remove additional Spaces which are in the Front and Back
let trimMe="   Hello World       ";
console.log("Trim Method will remove additional Spaces which are in the Front and Black",trimMe.trim());
//trimStart()
console.log("Trim Start will remove starting spaces",trimMe.trimStart());
//trimEnd()
console.log("Trim End Remove will remove ending spaces",trimMe.trimEnd());


//padStart,padEnd
//padStart
let myNumber="5"; //****00005
console.log("myNumber pad Start",myNumber.padStart(5,"*"));

//padEnd
console.log("myNumber pad End",myNumber.padEnd(5,"*"));

//split ==>Convert String into Array
let mycsvDetails="Ankit,Amit,Nidhi,Kiyan,Laksh";
mycsvDetailsArray=mycsvDetails.split(' ');//return an array
console.log("Split Method mycsvDetailsArray",mycsvDetailsArray);

let mycsvDetails1="Ankit,Amit,Nidhi*Kiyan,Laksh";
mycsvDetailsArraysplit=mycsvDetails1.split("*");//return an array
console.log("Split Method mycsvDetailsArraysplit based on Star",mycsvDetailsArraysplit);

//Convert Array into String
//toString --separated by , by Default
//join

let myArray1=["Rio,Bablu,Siri,Sammu,Snoopy,Rocky"];
console.log("myArray1",myArray1);
console.log("mycsvDetailsArray",mycsvDetailsArray);
let joinString=myArray1.join(" ");
console.log("joinString JoinString is not worked here space will come,joinString");

let myToString=myArray1.toString(" ");
console.log("joinString",myToString);

//Search the String(search,match)
//indexOf--returns indes position of string
//includes

let myPets="Bablu,Samm,Rio";
console.log("mypets",myPets);
console.log(myPets.indexOf("Bablu"));//pos of Bablu -0
console.log(myPets.indexOf("Rio"));//11
console.log(myPets.indexOf("Pinky"));//-1

//includes--> returns true if present ,returns false if not presentS
console.log("mypets",myPets);
console.log(myPets.includes("Bablu"));//pos of Bablu -0
console.log(myPets.includes("Rio"));//11
console.log(myPets.includes("Pinky"));//-1

//startswith()
console.log(myPets.startsWith("Rio"));
console.log(myPets.startsWith("Bablu"));

//endsWith()
console.log(myPets.endsWith("Rio"));
console.log(myPets.endsWith("Bablu"));

//Remove Duplicates from the String

//1.break the string into Array -split
//2.Convert array into Set-set method
//3.Combine the set-join

let myString="Hello World World";
let myStringArray=myString.split(" ");
console.log(myStringArray);
let finalArray=[];
myStringArray.map(currItem =>{
    if(!finalArray.includes(currItem))
    {
        finalArray=[...finalArray,currItem];
    }

});
console.log(finalArray);
console.log("finalArray",finalArray.join(" "));
