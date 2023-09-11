console.log('Objects Lwc Class');
//we can use let or const while declaring object
let myDetails= {
    fname: "sirisha",
    lname: "rani",
    age:"23",
    skills:["admin","apex","liitlelwc","littleIntegration"],
};
console.log("myDetails",myDetails);
console.log("tyepofmyDetails",typeof myDetails);

//Json.stringfy usage:object into string
let JsonString=JSON.stringify(myDetails);
console.log("JsonString",JsonString);
console.log("tyepofJsonString",typeof JsonString);

//Json.parse :Converts String into Object
let jsonObject=JSON.parse(JsonString);
console.log("JsonString",jsonObject);
console.log("type ofjsonObject",typeof jsonObject);
//modify the object 1. 2.[]
myDetails.DOB='21/06/1999';
console.log("myDetails",myDetails);

myDetails.Age='24';
console.log("myDetails",myDetails);
//[] -Whenever you have to populate the Property dynamically
mycountry = "Country";
myDetails[mycountry]= "India";
console.log("mydetails",myDetails);

myDetails["City Name"]="Srikakulam";
console.log("mydetails",myDetails);

//Access the value from the Object
let myCountry=myDetails.Country;
console.log("mycountry",myCountry);

//Spread Operator
console.log("spread operator");
let numberOne=[1,2,3];
let numberTwo=[4,5,6];

//Concatenation of array
let CombinedArray=[...numberOne, ...numberTwo];
console.log("numberOne",numberOne);
console.log("numberTwo",numberTwo);
console.log("numbCombinedArray",CombinedArray);

//Expand the string
let myName="My Name is Sirisha";
console.log("myName",myName);
console.log(...myName);

//add elements in Array
numberOne=[...numberOne,7,8,9];
console.log("numberOne",numberOne);
numberOne=[10,11,12,...numberOne,... numberTwo];
console.log("numberOne",numberOne);

//adding the Object
let myObj1={fname:"Sirisha",skills:["Admin","Development","lwc"]}
let myObj2={lname:"Rani",Country:"India"}
let finalObj={... myObj1,... myObj2};
console.log("myObj1",myObj1);
console.log("myObj2",myObj2);
console.log("CombinedObject",finalObj);

//Copy An Array and Object 
//Deep Copy in JS
let myFavFruits=['Apple','Orange','Grape'];
let DeepCopyFruitsCopy=myFavFruits;
console.log("myFavFruits",myFavFruits);
console.log("DeepCopyFruitsCopy",DeepCopyFruitsCopy);
DeepCopyFruitsCopy.push("Cherry");
console.log("DeepCopyFruitsCopy",DeepCopyFruitsCopy);
console.log("myFavFruits",myFavFruits);//Deep Copy in JS

let myFavFruitsOriginal=['Apple','Orange','Grape'];
console.log("myFavFruitsOriginal",myFavFruitsOriginal);
let ShallowFruitsCopy=[...myFavFruits];//Shallow Copy

console.log("myFavFruitsOriginal",myFavFruitsOriginal);
ShallowFruitsCopy.push("Litchi");
console.log("ShallowFruitsCopy",ShallowFruitsCopy);
console.log("myFavFruitsOriginal",myFavFruitsOriginal);

console.log("Destructuring");
let myFavChocolates=["DairyMilk","MilkyBar","Kopiko","AmulBar"];
let [favchoc1, , ,favchoc3]= myFavChocolates;
console.log("favchoc1",favchoc1);
console.log("favchoc1",favchoc1);
let [myfavchoc1,myfavchoc2,...rest]= myFavChocolates;
console.log("myfavchoc1",myfavchoc1);
console.log("myfavchoc2",myfavchoc2);
console.log("favchoc1",favchoc1);
console.log("rest",rest);

console.log("Destructuring in Object");
let myPetDetails = {
    fname:"Rio",
    lname:"Cubo",
    age: 3,
};

let {fname:FirstName,age} = myPetDetails;
console.log("fname",FirstName);
console.log("Age",age);


console.log("Strig Interpolation");
let msystr1="my name is ";
let mfname="sirisha ";
let mlname="rani ";
let mage=2023-1999;
let hstring ="age is";
let myfinalstring = `my name is ${mfname} ${mlname} and  my ${hstring} ${2023-1999}`;
console.log("myfinalstring",myfinalstring);

