/*console.log("Array and Array methods");

let myCars = ["BMW","Audi", "Ferrari", "Volvo"];//empty array
console.log("myCars", myCars);
console.log("typeofmyCars", typeof myCars);
console.log(myCars[2]);
let myFavCars = [];
console.log(myCars.length);//length of array
console.log(myFavCars.length);

//add the element in array
//push=> add element in array at end
//unshift => add element in array at begining
//spread operator=> add element in array in begining and end 

myCars.push("Hundai");
console.log("myCars", myCars);

myCars.unshift("TATA");
console.log("myCars", myCars);

myCars = ["Honda",...myCars, "Maruthi"];
console.log("myCars", myCars);

// remove the element from array
//pop=> remove the element from array from end . return the removed element
//shift => remove the element from array from begining

console.log(myCars);
let popItem = myCars.pop();
console.log(popItem);
console.log(myCars);

let shiftItem = myCars.shift();
console.log(shiftItem);
console.log(myCars);

//modify the element from array
//replace ferrari with honda

myCars[3] = "Honda";
console.log(myCars);

let myFavPeople = ["Mark", "John", "Mohisin", "Mohisin"];
console.log("myFavPeople", myFavPeople);

let mySet = new Set(myFavPeople);
console.log(mySet);

// search elememt
//index of-same as string
//includes(true or false)
console.log(myCars.indexOf("Audi"));
console.log(myCars.indexOf("Ferrari"));
console.log(myCars.includes("Audi"));

//how to convert array into string
//tostring()=>','
//join()=> decide seperator
console.log(myCars.toString());
console.log(myCars.join(" "));

//splice => to add element in array . to remove element from the array
//splice(param1.param2,rest)
//param1 => position where new element will be added
//param2 => how many elements needs to be removed
//rest => new element to you have to add
//splice => return the array of deleted elements
//splice => modify the original array

const fruits = ["Banana", "Orange", "Apple", " Mango"];
//add 2 fruits
fruits.splice(2, 0 , "Lemon", "Kiwi");
console.log("fruits", fruits);

//remove 2 fruits
let removedFruits = fruits.splice(0,2);
console.log("removedFruits", removedFruits);
console.log("fruits", fruits);

//slice => extract any portion from array go for slice
//slice => return the new array. it will not modify the original array
//slice(param1,param2)
//param1 => index of starting argument
//param2 => index of end argument + 1

let sliceArray = fruits.slice(1,3);
console.log("sliceArray", sliceArray);

let slicelemonkiwi = fruits.slice(0, 2);
console.log("slicelemonkiwi", slicelemonkiwi);*/

let bankingTransactions = [5000, -7000, 9000, -4000, 2000];
console.log("bankingTransactions", bankingTransactions);

/*//for each((currItem, index, originalaaray) => {

})*/
bankingTransactions.forEach((curritem) => {
    console.log(curritem);
});

 let updatedArray = bankingTransactions.map((curritem) => {
    return curritem/10;
});
console.log("updatedArray", updatedArray);

//get all the deposit 
//filter -- array
let depositArray = bankingTransactions.filter((curritem)=> curritem > 0);
console.log("depositArray", depositArray);

let withdrawArray = bankingTransactions.filter((curritem)=> curritem < 0);
console.log("withdrawArray", withdrawArray);

let myFruits = ["fig", "apple", "guava","cherry"];
//give the fruits for which the fruit name is greated than 3 characters

let filteredFruits = myFruits.filter((curritem) =>  curritem.length > 3);//
console.log("filteredFruits", filteredFruits);

//find -- always return one entry/item

//check if transaction array have 9000 entry

let entryFor9000 = bankingTransactions.find(curritem => curritem === 9000);
console.log("entryFor9000", entryFor9000);

//some
//every
//reduce