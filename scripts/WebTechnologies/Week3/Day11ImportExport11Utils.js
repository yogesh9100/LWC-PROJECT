//Export during declaration
export let weekdays=["Mon","Tues","Wed","Thu","Fri"];
export const DATE_OF_BIRTH_YEAR=1999;
export function sayHi(message){
alert(message);
}

//Export after declaration

function doAdd(number1,number2){
alert(number1+number2);
}


 export default function doMult(number1,number2){
    alert(number1*number2);

 }
  

export{ doAdd };

