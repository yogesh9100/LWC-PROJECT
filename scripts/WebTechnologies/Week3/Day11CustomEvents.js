//step3-handle the event
document.addEventListener("valueten",(event)=>{
    console.log("Access Event Data ",event.detail.message);
});
function changeHandler(event)
{
console.log(event.target.value);
let value=event.target.value;

if(value==10){
    //whenever use enter vaue as 10 then fire the custom event
//step 1-create custom event
    const  myevent=new CustomEvent("valueten",{
        detail:{
            message:"User have entered the value 10",

        },

    });

    //step2 -dispatch the event
    document.dispatchEvent(myevent);


}
}

//delaying the  func by 5 seconds
/*setTimeout(()=>{
console.log("After 5 sec this message  will come");
},5000);*/


/*//Write a Function to print the statement for every Evry 5 seconds.But after 15 seconds stop printing
let IntervalDetails="";
IntervalDetails=setInterval(()=>{
    console.log("Evry 5 seconds will be called again anand again But ater 15 seconds it ill stop");
},5000);
setTimeout(()=>{
clearInterval(IntervalDetails);
},15000);
*/

let intervalCount=0;
let timeoutCount=0;

function intervalFunction(){
    intervalCount++;
    console.log(`Interval tick:${intervalCount}`);
    if(intervalCount === 5){
        clearInterval(intervalId);

    }
}
function timeoutFunction(){
    timeoutCount++;
    console.log(`Timeout tick:${timeoutCount}`);
    if(intervalCount === 3){
        clearTimeout(intervalId);

    }
}
const intervalId=setInterval(intervalFunction,1000);
const timeoutId=setTimeout(timeoutFunction,500);
console.log("Start");

//first line of Output-start
//output of interval function->Interval tick1 2 3 4 5
//output of TimeOutput Func-Time Out Tick 1
//last line of output-Interval tick 5