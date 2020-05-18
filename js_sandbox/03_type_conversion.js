let val;

// Number to string
val = String(555);
val = String(4 + 4);
// Bool to String
val = String(true);
// Date to string
val = String(new Date());
// Array to string
val = String([1, 2, 3, 4]);

// toString
val = (5).toString();
val = true.toString();

// String to number
val = Number("5");
val = Number(true);
val = Number(false);
val = Number(null);
val = Number("hello");
val = Number([1, 2, 3, 4]);

val = parseInt("100.85");
val = parseFloat("100.30");

// Output
console.log(val);
console.log(typeof val);
//console.log(val.length);
console.log(val.toFixed(2));

// Type cohesion
const val1 = 5;
const val2 = String(6);
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);
