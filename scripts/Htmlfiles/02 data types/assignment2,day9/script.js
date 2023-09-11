/*
Write a function that takes a string as input and returns a new string with the first letter of each word capitalized.

Example:
Input: "hello world"
Output: "Hello World

Problem 2:
Write a function that takes a string as input and returns the reverse of the string, maintaining the case of each character.

Example:
Input: "Hello World"
Output: "dlroW olleH"

Write a function that takes a string as input and returns the number of occurrences of each character in the string as an object.

Example:
Input: "hello"
Output: { h: 1, e: 1, l: 2, o: 1 }

Write a function that generate the username of the user based on Firstname, Middlename and Lastname
Input - ankit Dilipji Jain
Output - ADJ

Write a function that takes an array of numbers as input and returns a new array with all the even numbers removed.

Example:
Input: [1, 2, 3, 4, 5, 6]
Output: [1, 3, 5]

Problem :
Write a function that takes an array of strings as input and returns a new array with only the strings that have a 
length greater than or equal to 5.

Example:
Input: ["apple", "banana", "grape", "orange", "kiwi"]
Output: ["apple", "banana", "orange"]

Write a function that takes an array of numbers as input and returns a new array with only the unique elements (remove duplicates).

Example:
Input: [1, 2, 2, 3, 4, 4, 5]
Output: [1, 2, 3, 4, 5]
*/

//Write a function that takes a string as input and returns the reverse of the string, maintaining the case of each character
 
/*Example:
Input: "hello world"
Output: "Hello World*/

/*let p1String = "hello world";
let p2String = p1String.split(" ");

for(let i=0;i<p2String.length;i++)
{
    p2String[i] = p2String[i][0].toUpperCase()+p2String[i].substr(1);
 
}
let finalstring = p2String.join(" ");

console.log(finalstring);


/* Problem 2:
Write a function that takes a string as input and returns the reverse of the string, maintaining the case of each character.

Example:
Input: "Hello World"
Output: "dlroW olleH" */


/*let reverseString = "Hello World";
let finalResut2 = [...reverseString].reverse().join("");
console.log(finalResut2);*/

const reverseStringwithCase = (inputString) =>
/*let inputArray = inputString.split("");
console.log("inputArray", inputArray);
let reversalArray = inputArray.reverse();
console.log("reversalArray", reversalArray);
let output = reversalArray.join("");
console.log("output", output);*/
inputString.split("").reverse().join("");
console.log(reverseStringwithCase("Hello World"));

/*
Write a function that takes an array of numbers as input and returns a new array with all the even numbers removed.

Example:
Input: [1, 2, 3, 4, 5, 6]
Output: [1, 3, 5]
 */
/*let numbers = [1, 2, 3, 4, 5, 6];
let even = [];
for(let i=0;i<numbers.length;i++){
    if (numbers[i] % 2 == 0)
     even.push(numbers[i]);
   
}
console.log(even);


/*
Write a function that takes an array of numbers as input and returns a new array with only the unique elements (remove duplicates).

Example:
Input: [1, 2, 2, 3, 4, 4, 5]
Output: [1, 2, 3, 4, 5]
 */

/*let dulnumbers = [1, 2, 2, 3, 4, 4, 5];
let resultnum = dulnumbers.filter(function(value,index){
    return dulnumbers.indexOf(value) == index
});
console.log(resultnum);

/*Write a function that takes a string as input and returns a new string with the first letter of each word capitalized.

Example:
Input: "hello world"
Output: "Hello World*/

/*const capitalizedFirstLetter = (inputString) => 
    /*let convertedArray = inputString.split(" ");
    let convertedmap = convertedArray.map(
        (curritem) => curritem[0].toUpperCase() + curritem.slice(1)
);
let resultString = convertedmap.join(" ");
console.log(convertedArray);
console.log(convertedmap);
console.log(resultString);*/
 /*inputString
 .split(" ")
 .map((curritem) => curritem[0].toUpperCase( ) + curritem.slice(1))
 .join(" ");

console.log(capitalizedFirstLetter("hello world welcome to learn salesforce"));

/*Write a function that takes a string as input and returns the number of occurrences of each character in the string as an object.

Example:
Input: "hello"
Output: { h: 1, e: 1, l: 2, o: 1 }*/

/*const countCharacters = (inputString) => {
    let output = {}
    console.log("inputString", inputString.split(""));
    let inputArray = inputString.split("");
    for(let curritem of inputArray) {
       console.log("curritem", curritem);
       if(output.hasOwnProperty(curritem)){
        output[curritem] = output[curritem] + 1;
       }else{
        output[curritem] = 1;
       }
    }
    console.log("output", output);
};
countCharacters("hello");

/*Write a function that generate the username of the user based on Firstname, Middlename and Lastname
Input - ankit Dilipji Jain
Output - ADJ*/

/*const generateUserName = (inputString) => 
    /*let upperCase = inputString.toUpperCase();
    console.log("upperCase", upperCase);
    let inputArray = upperCase.split(" ");
    console.log("inputArray", inputArray);
    let intialArray = inputArray.map((curritem)=> curritem[0]);
    console.log("intialArray", intialArray);
    let output = intialArray.join("");
    console.log("output", output);*/
    
    //let result =
    /* inputString
    .toUpperCase()
    .split(" ")
    .map((curritem) => curritem[0])
    .join("");

console.log(generateUserName("ankit Dilipji Jain"));*/

function clickme() {
    alert("welcome me");
}

function mouseoverhandler() {
    console.log("mouse over event executed");
    let element = document.querySelector(".hoverme");
    element.style.display ="none";
}

function mouseouthandler() {
    
    let element = document.querySelector(".hoverme");
    element.style.display = "";
}
function changeHandler(event){
    console.log(event.target.value);
}
