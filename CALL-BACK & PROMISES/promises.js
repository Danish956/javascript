function createPromise(){
    return new Promise(function exec(resolve, reject){
        setTimeout(function f(){
            console.log("time out")
            resolve("done");
        }, 3000);
    } );
}

console.log("start");
let x = createPromise();
console.log("got a new promises");
x.then(function f(){
    console.log("promise done");
});