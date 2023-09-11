console.log("Day 7 Array And CallBack Functions");

//Function Declaration--calling function before declaration
function calc1(number1,number2){
let sum=number1 + number2;
 return sum;
}

//Function Expression
let calc2=function (number1,number2){
let sum=number1 + number2;
return sum;
};

let calc1result=calc1(10,20);
console.log("calc1result ",calc1result);

let calc2result2=calc2(10,20);
console.log("calc2result2",calc2result2);

//Hoisting--->Calling function 1st and decalraing function later
//FunctionDeclaartion Supports Hoisting And Function Expression Doesnot support Hoisting

let calc=function(number1,number2){
if(number2){
    let sum=number1+number2;
return sum;
}
else
{
return number1;
}
}

let calc1result3=calc2(10);
console.log("calc1result3",calc1result3);
let calc1result4=calc2(10,5);
console.log("calc1result4",calc1result4);

//arro func
console.log("Arrow Func");
let Arfn=(number1,number2)=>{
    if(number2){
        let sum=number1+number2;
    return sum;
    }
    else
    {
    return number1;
    }
    }

    let calarrcall=Arfn(10);
    console.log("Arfn res",calarrcall);

    let calarrcall2=Arfn(10,5);
    console.log("Arfn res 2",calarrcall2);

    let greet=function(username)
    {
        return `${username},This IsDay 7 Arraow And CallBack Func`;
    };

    let greeArrfn=(username)=>{
        return `${username},This IsDay 7 Arraow And CallBack Func`;
    };
 let greeArrfnCall=greeArrfn("Sirisha");
 console.log(greeArrfnCall);

 //Arraow Func with single argument best syntax if no paramets means put () while passing arguments
 let greeArrfnsingleArgument=username=> `${username},This IsDay 7 Arraow And CallBack Func`;
 console.log(greeArrfnsingleArgument("Ankit Sir"));

let welcomemesaage=()=>"Welcome to Bottcmap";
console.log(welcomemesaage());

//CallBackFunctions
function WelcomeMe(name,callMe){
    console.log(`Hello ${name}`);
    callMe();

}
function greetMeToo(){
    console.log(`We are in Lwc Training`);
}

function goodBye(){
    console.log(`Come Again Be Conistent`);

}
console.log("callBack Func goobye is called");
WelcomeMe("Sirisha",goodBye);
console.log("callBack Func greetMeToo is called");
WelcomeMe("Sirisha",greetMeToo);

//setTimeout(()=>1000)  -->This is a Callback Function
//setTimeout(()




