const firstName = "William";
const lastName = "Johnson";
const age = 36;
const str = "Hello there my name is Brad";
const tags = "web design, web development, programming";

let val;

val = firstName + lastName;

// Concatenation
val = firstName + " " + lastName;

// Append
val = "Brad ";
val += "Traversy";

val = "Hello, my name is " + firstName + " and I am " + age;

// Ecsaping
val = "That's awesome, I can't wait";

// Length
val = firstName.length;

// concat
val = firstName.concat(" ", lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// Read-only arrays
val = firstName[3];

// IndexOf() starting from 0
val = firstName.indexOf("l");
val = firstName.lastIndexOf("l");

// CharAt()
val = firstName.charAt("0");

// Get last char
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(0, 4);

// slice
val = firstName.slice(0, 4);
val = firstName.slice(-4);

// split()
val = str.split(" ");
val = tags.split(",");

// replace
val = str.replace("Brad", "Fahmi");

// inculudes() test to see if something is in a string
val = str.includes("Hello");

console.log(val);
