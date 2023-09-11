//export during declaration
export let weekdays = ["mon", "tue", "wed", "thu", "fri"];
export const DATE_OF_BIRTH_YEAR =1947;
export function sayHi(message){
    alert(message);
}

//export after declaration 
function doAdd(number1, number2){
    alert(number1 + number2);
}
//default export
export default function doMul(number1, number2){
    alert(number1 * number2);
}
export { doAdd };