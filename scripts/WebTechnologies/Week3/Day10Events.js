let element=Array.from(document.querySelectorAll( "div"));
console.log("element",element);

function clickme()
{
    alert("Wecome!");
}
function mouseoverHandler(){
    console.log("Mouse Over Event Executed");
    let element=document.querySelector(".hover");
    element.style.display= "none";
}

function mouseoutHandler(){
    console.log("Mouse Out Event Executed");
    let element=document.querySelector(".hover");
    element.style.display = "";
}
function changeHandler(event){
    console.log(event.target.value);
}