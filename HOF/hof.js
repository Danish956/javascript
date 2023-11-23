//A function which return a function or take other function as an argument is called HOF also known as first class function
// simple si baat hai agar ek function ko aap varriable ke trah treat karne lag jaenge is called hof
const powerTwo = (n) => {
    return n**2 
}

function powerCube (powerTwo, n){
    return powerTwo(n)*n

}

//console.log(powerCube(powerTwo, 3));

function sayHello(){
    return () =>{
        console.log("danish");
    }
}

let guessValue = sayHello();
//console.log(guessValue);
//guessValue();


const higherOrder = n => {
    const oneFun = m =>{
        const twoFun = p =>{
            return m+n+p;
        }
        return twoFun
    }
    return oneFun
}
console.log(higherOrder(2)(3)(4))

const myNums = [2,3,4,5]
const sumArray = arr => {
    let total = 0
    arr.array.forEach(function (element) {
        total += element
        
    });
    return total

}
console.log(sumArray(myNums));