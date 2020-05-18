// Create some arrays
const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 78, 69, 96);
const fruit = ["Apple", "Banana", "Orange", "Pear"];
const mixed = [22, "Hello", true, undefined, null, { a: 1, b: 1 }, new Date()];

let val;

// Get array length
val = numbers.length;
// Check if array
val = Array.isArray(numbers);
// Get a single value
val = numbers[5];
val = numbers[0];
// Insert into array
numbers[2] = 100;
// Find index of value
val = numbers.indexOf(36);

// MUTATING ARRAYS
numbers.push(250); // Add on to end
numbers.unshift(550); // Add o to front
// Take off from end
numbers.pop();
// Take off from front
numbers.shift();
// Splice (take out a value or values) values
numbers.splice(1, 1);
// Reverse
numbers.reverse();

// Concatenate array
val = numbers.concat(numbers2);

// Sort arrays
val = fruit.sort();
val = numbers.sort(); // sorting the first digits of every numbers

// Use the compare function
val = numbers.sort(function (x, y) {
  return x - y;
});

// Reverse sort
val = numbers.sort(function (x, y) {
  return y - x;
});

// Find
function under50(num) {
  return num < 50;
}
// find the first number in the sorted array under 50
val = numbers.find(under50);

console.log(numbers);
console.log(val);
