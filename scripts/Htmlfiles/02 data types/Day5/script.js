/*console.log("objects");


let myDetails = {
    fname: "yogi",
    lname: "sai",
    age: 12,
    skills: [ "admin","apex","LWC"],
};

console.log("myDetails", myDetails);
console.log("typeof myDetails", typeof myDetails);

let jsonString = JSON.stringify(myDetails);
console.log("jsonString", jsonString);
console.log("typeof jsonString", typeof jsonString);

let jsonObject = JSON.parse(jsonString);
console.log("jsonObject", jsonObject);
console.log("typeof jsonObject", typeof jsonObject);


myDetails.doy = '1998'
console.log("myDetails", myDetails);

myDetails.age =  2023-1998;
console.log("myDetails", myDetails);

mycountry = "Country";
myDetails[mycountry] = "India";
console.log("myDetails", myDetails);

myDetails["City Name"] = "Pune";
console.log("myDetails", myDetails);

//acess the value ,".", []
let myCountry = myDetails.Country;
console.log("myCountry",myCountry);

let myCity = myDetails["City Name"];
console.log("myCity",myCity);*/



/*console.log("Spread Operator");
let numberOne = [1, 2, 3];
let numberTwo = [4, 5, 6];

//concantenation of array
let combinedArray = [ ...numberOne,...numberTwo];
console.log("numberOne", numberOne);
console.log("numberTwo", numberTwo);
console.log("combinedArray",combinedArray);

//expand the string

let myName = "my name is sai";
console.log(myName);
console.log(...myName);

// add elements in array
numberOne = [ 10,11,12,...numberOne, 21,22,23];
console.log("numberOne",numberOne);

//adding the object
let myObj1 = { fname: "yogi",skills: ["JS","LWC"]};
let myObj2 = { lname: "sai",country :"india"};
let finalobject = {...myObj1,...myObj2};
console.log("finalobject",finalobject);

//copy an array and object
let myFavFruits =["apple","grapes"];
let myFavFruitsCopy = [...myFavFruits];
console.log("myFavFruits",myFavFruits);
console.log("myFavFruitsCopy",myFavFruitsCopy);
myFavFruitsCopy.push("Cherry");
console.log("myFavFruitsCopy",myFavFruitsCopy);
console.log("myFavFruits", myFavFruits);//deep copy*/




console.log('destructing')
let myFavFruits = ["babana","cherry","papaya"];
let[myFavFruit1, ,myFavFruit2, myFavFruit3] = myFavFruits;
console.log("myFavFruit1",myFavFruit1);
console.log("myFavFruit2", myFavFruit2);

let [ favFruit1, favFruit2,...rest] = myFavFruits;
console.log(favFruit1);
console.log(favFruit2);
console.log(rest);

