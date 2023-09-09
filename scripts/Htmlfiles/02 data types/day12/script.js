/*// create promise
function generatepromise(message) {
 return new Promise((resolve, reject) =>{
    if(!message){
        reject("message is empty");
    }

    setTimeout(() =>{
        console.log(message);
        resolve();
    }, 1000);
});
}
 async function generateDifferentPromise(){
    try{
        await generatepromise("1st call");
        await generatepromise("2nd call");
    } catch (error){
        console.log(error);
    }
 }
 generateDifferentPromise();
/*generatepromise()
.then(() =>{
    console.log("promise resloved successfully");
})
.catch((error) =>{
    console.log("promise rejected", error);
});*/
// how to call the promise
/*generatepromise("1st call")
.then(() =>{
    console.log(" 1st promise resolved sucessfully");
    generatepromise("2st call");
})
 .then(() =>{
    console.log(" 2nd promise resolved sucessfully");
    generatepromise();
})
.catch((error) =>{
    console.log("promise rejected", error);
});*/


//promise.all() , promise.any(), promise.race()
function resolveTimeout(value, delay){
    return new Promise((resolve) => setTimeout(() => resolve(value), delay));
}
function rejectTimeout(reason, delay){
    return new Promise((resolve, reject) => setTimeout(() => reject(reason), delay));
}

async function load(){
    let promise1 = resolveTimeout("welcome to yogi", 5000);
    //let promise2 = resolveTimeout("welcome to sai", 7000);
    let promise2 = rejectTimeout("load failed", 3000);
    const allPromise = Promise.race([promise2, promise1]);
    try{
        const lists = await allPromise;
        console.log("lists", lists);
    } catch (error){
        console.log(error);
    }
}

load();