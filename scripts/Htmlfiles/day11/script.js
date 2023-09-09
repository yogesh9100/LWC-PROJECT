/*function changeHandler(event){
    console.log(event.target.value);
    let value = event.target.value;
    // whenever user enter value 10 then fire the custom event
    if(value ==10){
        //step-1 - create the custom event
        const myevent = new CustomEvent("valueten",{
            detail : {
                message: "user have entered value 10",
            },
        });

        // step -2 dispatch the event
        document.dispatchEvent(myevent);
    }
}

// step-3 - handle the event

document.addEventListener("valueten", (event) =>{
    console.log("access event data", event.detail.message);
});*/

/*setTimeout(() => {
console.log("Timeout done ");
}, 5000);*/

/*let intervalDetails ="";
intervalDetails = setInterval(() => {
    console.log("Timeinterval done");
}, 5000);

setTimeout(() =>{
    clearInterval(intervalDetails);
    console.log("interval processing stopped");
}, 15000);*/

/*let intervalCount = 0;
let timeoutCount = 0;

function intervalFunction() {
    intervalCount++;
    console.log('interval tick: ${intervalCount}');
    if (intervalCount === 5){
        clearInterval(intervalId);
    }
}
function timeoutFunction (){
    timeoutCount++;
    console.log('interval tick: ${timeoutCount}');
    if (timeoutCount === 3){
        clearTimeout(timeoutId);
    }
}

const intervalId = setInterval(intervalFunction, 1000);
const timeoutId = setInterval(timeoutFunction, 500);

console.log("start");*/

/*import doMul from "./util.js";
import * as lwc from "./util.js"
console.log("weekdays", lwc.weekdays);
console.log("DATE_OF_BIRTH_YEAR",lwc.DATE_OF_BIRTH_YEAR);
lwc.sayHi("welcome");
doMul(2, 4);*/

async function abc(){
    let promise = new promise((resolve, reject)=>{
        setTimeout(()=>resolve("done trppos"),5000)
    })
    let result = await promise
    console.log("waiting")
    console.log(result)
}
