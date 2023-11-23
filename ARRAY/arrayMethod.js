let arr = [6,7,8,9,6]
arr.push(8,7) // add the eleemt at last
console.log(arr)

arr.pop()
console.log(arr) //pop the element from last

arr.shift(); //remove the element from zero index

console.log(arr);

arr.unshift(9);// add the element at starting index
console.log(arr);

let a1 = ['danish', 1,2,3];
let a2 = ["rahul"];
let a3 = a1.concat(a2);
console.log(a1,a2,a3);

let s = a3.join("hey ");
console.log(s);

a3.reverse(); // reverse the array
console.log(a3);

console.log(a3.indexOf(4)); // give the index of particular element

let arr1 = [1,2,3,4,5,6,"danish"];
console.log(arr1.slice(2,5)); //slice element and form an array

arr1.splice(2, 1, 11);
console.log(arr1);






