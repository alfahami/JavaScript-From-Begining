const num1 = 100;
const num2 = 50;
let val;

// Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.4);
// Round up
val = Math.ceil(2.4);
// Round down
val = Math.floor(2.8);
// Square a number
val = Math.sqrt(64);
val = Math.abs(-12);
val = Math.pow(3, 3);
val = Math.min(2, 33, 78, 89, 12, 578, -1, 0);
val = Math.max(2, 33, 78, 89, 12, 578, -1, 0);
val = Math.random();
// Random number between 1 and 20
val = Math.floor(Math.random() * 20 + 1);

console.log(val);
