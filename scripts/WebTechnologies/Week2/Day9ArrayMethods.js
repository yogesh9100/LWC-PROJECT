console.log("Array Methods");
let myCars=["BMW","Audi","Lamborgini","Ferrari"];//Empty Array
console.log("myCars",myCars);
console.log("type of myCars",typeof myCars);
console.log(myCars[2]);

let myFavCars=[];
console.log("MyFavCars Lenth",myFavCars.length);
console.log("myCars Lenth",myCars.length);
//add the elements in array
//push-->add elements in array at end
//unshift-->add the elements at the beginning
//spread operator

let pushCar=myCars.push("TATA");
console.log("mycars after push method at end element will add",myCars);

let addCar=myCars.unshift("MARUTHI");
console.log("mycars after unshift method at start element will add",myCars);

mycars=["Honda",... myCars,"Hyundai Mango"];
console.log("Spread operator after adding cars",mycars);

//remove the elemnts from array
//pop-->remove the elements from array from end.return the ramining ones
//shift--> remove the elemenst from array from start

console.log(myCars);
let popItem=myCars.pop();
console.log("pop()item remove is car removed from end ",popItem);
console.log(myCars);


let shiftItem=myCars.shift();
console.log("shift()item remove iscar removed from starting ",shiftItem);
console.log(myCars);

//modify the elemnt from arrayc-use array index

//replace ferari with Honda
myCars[3]="Honda";
console.log("Replaced ",myCars);
let myFavPeople=["Rio","Bablu","Sammu","Sammu"];
console.log("myFavPeople ",myFavPeople);
let mySet=new Set(myFavPeople);
console.log("mySet will remove duplicates",mySet);

//search element
//indexOf
//includes

console.log("indexof Audi is",myCars.indexOf("Audi"));
console.log("indexof Ferari is",myCars.indexOf("Ferari"));

console.log("Is Audi included  ?",myCars.includes("Audi"));
console.log("Is Ferari includes  ?",myCars.includes("Ferari"));

//Convert Array into String
//toString()
//join()

console.log("toString method spearated by comma",myCars.toString());
console.log("Join method separated by given * or $etc,,.",myCars.join("*"));

//splice
//slice

//splice-add elements into Array and also to remove the elements from the Array
//syntax-->splice(param1,param2)
//param1-->position where elements need to be removed
//param2-->How mant elemnst need to be removd
//rest--> new elemnts you hav eto add
//splice-->return the array of deleted  elemnts

const fruits=["Bnana","Mango","Orange","Mango"];
//add 2 fruits
fruits.splice(2,0,"Lemon","Kiwi");
console.log("Afters plicing after 2",fruits);

//removed 2 fruits
fruits.splice(0,2);
console.log("Afters plicing removal 2",fruits);

//slice-extract any portion from the Array
//slice--return the new array ,it will not modify the orginal array
//slice(param1,param2) 
//param1-indext of starting argument
//param2-index of end argument+1


let slicedarray=fruits.slice(1,3)
console.log("fruits",fruits);
console.log("slicedarray",slicedarray);
//extract lemon and kiwi
let lemonandkiwi=fruits.slice(0,2);
console.log(lemonandkiwi);//add the end pos +1

let bankingTransactions=[5000,-7000,900,-4000,2000];
console.log("Banking transactions",bankingTransactions);

//for each
/*forEach((currItem,index,originalArray)=>{

});
*/
bankingTransactions.forEach((curritem)=>{
    curritem=curritem/10;
console.log("curritem",curritem);

});
//forEach will not return any
console.log("bankingTransactions",bankingTransactions);

let updatedArray=bankingTransactions.map((curritem) => {
   return curritem=curritem/10;
   
});
console.log("updatedArray",updatedArray);


//get all the deposit from the Arry
//filter 
//filter will return true or fals eonly
let depositArray=bankingTransactions.filter((currItem)=>
currItem > 0);


console.log("depositArray",depositArray);

let withdrawlArray=bankingTransactions.filter((currItem)=>
currItem < 0);


console.log("withdrawlArray",withdrawlArray);

let myFruits=["fig","Apple","Guava","Cherry"];
console.log("myFruits",myFruits);
//give the fruits for which fruit name is greater than 3 character

let filteredFruits=myFruits.filter((currItem)=> currItem.length>3);
console.log("filteredFruits",filteredFruits);

//find
//find alwaws return 1 entry/1 item
//check if transaction array has 9000 entry or not
console.log("bankingTransactions",bankingTransactions);
let entryFound = bankingTransactions.find((curritem)=>curritem ==='9000');
console.log("entryFound",entryFound);

//some
//every
//reduce

