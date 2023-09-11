console.log("Bootcamo Day 6 LoopingingAnd Collections");
let myFavCars=["BMW","Audi","Suzuki","Tata"];
//for loop
for(let i=0;i<myFavCars.length;i++)
{
console.log(`${i+1}.${myFavCars[i]}`);
}

//while condition
let currentIndex=0;
console.log("Length",myFavCars.length);
while(currentIndex < myFavCars.length)
{
    console.log(`${1+currentIndex}.${myFavCars[currentIndex]}`);
    currentIndex=currentIndex +1;
}


/*do{

}while(){}
*/
do{
console.log("Do while Loop");
}while(1==2)


//for of loop
/* for(let item of myFavCars)
{

}*/

for(let currItem of myFavCars)
{
    console.log("currItem",currItem);

}

for(let[index,car] of myFavCars.entries())
{
console.log(`${index},${car}`);
}

/*To make Objects Iterable we have 3 methods
1.Object.keys()
2.Object.values()
3.Object.entries()
*/

let myDetails={
    fname: "Ankit",
    lname: "jain",
    tutor:"lwc"
};
//1.Object.keys()
for(let currInst of Object.keys(myDetails))
{
    console.log("currInst",currInst);
    console.log("currInst",myDetails[currInst]);//getting values from object,keys()
}
//2.Object.values()
for(let currInst of Object.values(myDetails))
{
    console.log("currInst",currInst);
}
//3.Object.entries()
for(let currInst of Object.entries(myDetails))
{
    console.log("currInst",currInst);//you will get array so use[key,value]
}

for(let[key,value] of Object.entries(myDetails))
{
    console.log(key,value);
}


//for in loop
//for(let var in Collection)

for(let currItem in myFavCars){
    console.log(currItem);//you will get indices
    
}

for(let currItem in myFavCars){
    console.log(myFavCars[currItem]);//you will get values for the collec
    
}

for(let lvar in myFavCars)
{
    console.log(lvar,myFavCars[lvar]);
}

let openinghours={
    friday:{open:"10 AM",close:"10PM"},
    monday:{open:"9 AM",close:"11PM"},
};

//to iteate and print obj values prefeerd choice is for in loop
//for in loop
for(let varn in openinghours){
console.log(varn,openinghours[varn]);//returns an object
//destructuring concept
//tip break ansd see what iteration is returning
let{open,close}=openinghours[varn];
console.log(open,close);
console.log(`On ${varn} Office  starts at ${open} and closes at ${close}`);
}

//for of loop best prctice
for(let[day,{open,close}] of Object.entries(openinghours)){
console.log(day,open,close);
}


console.log("Map Collection");
let myMap=new Map();
console.log("myMap",myMap);
console.log("myMap",myMap);
myMap.set("1","sirisha");
myMap.set("true","practicing");
myMap.set("lwc","yes");

console.log("myMap",myMap);
console.log("myMapsize is ",myMap.size);
console.log("myMap get values",myMap.get("1"));
console.log("myMap",myMap);

let favPlaces=new Map([
    ["Hyd","Charminar"],
    ["Vizag","RK Beach"],
]);

//for of loop
for(let [key ,value]of favPlaces)
{
console.log(key,value);
}

for(let currvar of favPlaces.keys())
{
console.log(currvar);
}

for(let currvar of favPlaces.values())
{
console.log(currvar);
}


//set collection
let myset=new Set();
console.log("myset",myset);
myset.add("Samosa");
myset.add("sweetcorn");
myset.add("pakoda");
myset.add("Samosa");
myset.add("Homefood");
console.log("mysetdetails",myset);
console.log("is it have samosa",myset.has("Samosa"));
console.log("currvar",myset);
for(let currvar of myset)
{
console.log(currvar);
}





 