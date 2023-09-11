/*console.log("day6");
let myFavCars = ["audi","benze","maruthi", " pepsi", "soda"];
let myDetails = {
    fname: "yogi",
    lname: " sai",
    age: 22
};
///for (intlization, condition, increment)

for(let i = 0; i < myFavCars.length; i++){
    console.log('${i + 1}. ${myFavCars[i]}');
}

//while

let currentIndex = 0;
console.log(myFavCars.length);
while (currentIndex < myFavCars.length){
    console.log('${currrentIndex + 1}. ${myFavCars[i]}');
    currentIndex = currentIndex + 1;
}

do{
    console.log("Do While Loop");
}while ( 1==2);

//for of loop
for (let curritem of myFavCars){
    console.log("curritem", curritem);
}

//index and item
for (let [index, car] of myFavCars.entries ()){
    console.log('${index + 1}. ${car}');
}


for(let curritem of Object.keys(myDetails)){
    console.log("curritem", curritem);
    console.log("Property value", myDetails[curritem]);
}

for(let curritem of Object.values(myDetails)){
    console.log("curritem", curritem);
}

for(let [key, value] of Object.entries(myDetails)){
    console.log(key, value);
}
//for in loop
for(let curritem in myFavCars){
    console.log(curritem, myFavCars[curritem]);
}

console.log("myDetails", myDetails);
for ( let item in myDetails){
    console.log(item, myDetails [item]);
}

let openingHours = {
    fri: { open: "10AM", close: " 11PM"},
    sat: { open: "11AM", close: " 11PM"},
    sun: { open: "12AM", close: " 11PM"},
    };
for(let curritem in  openingHours){
console.log(curritem);
console.log(openingHours[curritem]);
let { open, close} = openingHours[curritem];
console.log(open,close);
console.log('On ${curritem} office starts at ${open} and close at ${close}');
}

for(let [day,{ open, close}] of Object.entries(openingHours)){
    console.log(day, open, close);
    
}*/

/*console.log("Map Collection");
let myMap = new Map();
console.log("myMap",myMap);
myMap.set("1", " yogi");
myMap.set(2, 6);
console.log("myMap",myMap);

//to access value from map

console.log(myMap.get("1"));
console.log(myMap.size);
let favPlaces = new Map([
   ["jaipur","place"],
   ["pune","fort"] 
]);
console.log("favPlaces", favPlaces);

for(let [key, value] of favPlaces){
    console.log(key, value);
}
for(let curritem of favPlaces.keys()){
    console.log(curritem);
}

for(let curritem of favPlaces.values()){
    console.log(curritem);
}*/

let mySet = new Set();
console.log("myset", mySet);
mySet.add("burger");
mySet.add("pizaa");
mySet.add("sand");
mySet.add("wich");
mySet.add("burger");
console.log("myset", mySet);

//check if sand is present or not
console.log(mySet.has("sand"));
mySet.delete("sand");

let myFavCities = new Set(["pune", "hyderabed","bengali", "delhi"]);
console.log("myFavCities", myFavCities);

for ( let curritem of myFavCities){
    console.log(curritem);
}