//var, let, const

var name = "John Doe";
console.log(name);
name = "Steve Smith";
console.log(name);

// Initializing a variable
var greeting;
console.log(greeting);
greeting = "Hello";
console.log(greeting);

// Variable naming convention
// Letters, numbers, _, $
// Can not start with a number

// Multi word vars
var firstName = "John"; // Camel Case
var first_name = "Sara"; // Underscore
var FirstName = "Tom"; // Pascal case

// LET
let Name = "John Doe";
console.log(Name);
name = "Steve Smith";
console.log(Name);

// CONST
const naMe = "John";
console.log(naMe);
// Cannot rassign
//name = "Sara";
// Have to assign a value
const Greeting = "Wassup";

const person = {
  name: "Tom",
  age: 30,
};

person.name = "Jaloud";
person.age = 25;
console.log(person);

const numbers = [1, 2, 3, 4, 5];
numbers.push(6);

console.log(numbers);

// Log to console
/* console.log("Hello World");
console.log(123);
console.log(true);
var greetings = "Hello";
console.log(greetings);
console.log([1, 2, 3, 4]);
console.log({ a: 1, b: 2, c: 3 });
console.table({ a: 1, b: 2, c: 3 });

console.error("This is some error");
console.clear();
console.warn("This is a warning");
console.time("Hello");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.timeEnd("Hello"); */
