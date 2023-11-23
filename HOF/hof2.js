// for each, map, reduce, filter, find, sort
let arr = [2, 3, 4];
arr.forEach(function(element, index, arr){
    console.log(index, element, arr);
})

//executing same thing using arrow function
arr.forEach((element, index, arr) => {
    console.log("arrow base function: ", index, element, arr);

});

const heroes = ["naagraj", "doga", "dhruva", "maniraj"]
heroes.forEach((el) => { console.log(el.toUpperCase())})

//map

arr.map(function(element, index, arr){
    console.log(element, index, arr);
})

heroes.map((h) => console.log(h.toUpperCase()))

//filter
console.log(heroes);
const heroesWithRaj = heroes.filter((h) => {
    return h.endsWith("raj")
})

console.log(heroesWithRaj);

//Shopping cart
const cartBill = [20, 30, 50]
const sumOfCartBill = cartBill.reduce((prev, current) => prev+current, 0)
console.log(sumOfCartBill);

const gameScore = [200, 300, 310, 250, 150]

// check weather all values are number or not
const gameScoreCheck = gameScore.every((v) => typeof v === Number)
console.log(gameScoreCheck);