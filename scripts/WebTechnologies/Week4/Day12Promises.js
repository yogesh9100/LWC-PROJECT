/*Callback Hell Example
setTimeout(()=>{
console.log("Hello One");

setTimeout(() => {
    console.log("Hello Two"); 
}, 5000);
setTimeout(() => {
    console.log("Hello Three"); 
}, 5000);
},5000)
*/



/*  Promise using Arrow Functions
function generatePromise(message){
  return  new  Promise((resolve,reject)=> {
    if(!message){
reject("Message is Empty");
    }
setTimeout(() =>  {
    console.log(message);
    resolve();
},1000);
});
}
/*
generatePromise()
.then(() => {
    console.log("Prmomise resolved Succesffuly");
})
.catch((error)=>{
    console.log("Prmomise rejected",error);
});

*/

/*//How to call the Promise
generatePromise("1st Call")
.then(() =>
{
    console.log("1st Prmoise Resolved Succesfully!");
    generatePromise("2nd Call");
})
  .then(() => {
        console.log("2nd Prmoise Resolved Succesfully!");
        generatePromise();
}).catch((error)=>{
    console.log("Prmomise rejected",error);
});
*/
/*
console.log("Promise Using Async Functions ");
function generateMessage(message){
    return  new  Promise((resolve,reject)=> {
      if(!message){
  reject("Message is Empty");
      }
  setTimeout(() =>  {
      console.log(message);
      resolve();
  },1000);
  });
  }

async function generateDifferentPromises(){
try{
    await generateMessage("1st Call");
    await generateMessage("2nd Call");
}
catch(error){
console.log(error);
}
}
generateDifferentPromises();

*/

function resolvetimeOut(value,delay){
    return new Promise((resolve) =>setTimeout(()=> resolve(value),delay));

}

function rejecttimeOut(reason,delay){
    return new Promise((resolve,reject) =>setTimeout(()=> reject(reason),delay));

}
async function load(){
    let promise1=resolvetimeOut("We are in LWC BootCamp",3000);
    let promise2=rejecttimeOut("Loading failed",7000);
    //Promise.All()-->It will execte and print only success outcomes in Array out come if all the sended inputs in it are resolved
    //promise.race()-->the first will execute as like in a race wheatever it is is resolved or rejected which was first
    //Promise.any()-->Even if it has atleast 1 resolve and all rejects that resolve will execute 
    const allPromise=Promise.race([promise2,promise1]);
    try{
        const lists=await allPromise; 
        console.log("lists",lists);
    }catch(error){
        console.error(error);
    }
}
load();