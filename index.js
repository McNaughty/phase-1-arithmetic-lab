
// Write your code here

const num1 = 10;
let num2 = 6.2;

let multiply = num1 * num2;
console.log(multiply);

//generates a random number between 0 and 50

let min = Math.ceil(1);
let maxi = Math.floor(50);
let random = Math.floor(Math.random() * (maxi) + min);
console.log(random);

//is an equation that calculates a remainder that is equal to 4:

let num3 = 19;
let num4 = 5;

let mod = num3 % num4;
console.log(mod);


//return maximum number in an array using the spread operator

const arr = [10, 15, 20];
let max = Math.max(...arr);

console.log(max);