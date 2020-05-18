//FOR LOOP

for (let i = 0; i < 10; i++) {
  if (i === 2) {
    console.log("2 is my favorite number");
    continue; // stop the loop and go to the next iteration, basically replacing it.
  }

  if (i === 5) {
    console.log("Stop the loop");
    break;
  }

  console.log("Number " + i);
}

// WHILE LOOP

let k = 0;

console.log("WHILE LOOP");
while (k < 5) {
  console.log("Number " + k);
  k++;
}

// DO WHILE LOOP
console.log("DO WHILE");
let j = 10;

do {
  console.log("Number " + j);
  j++;
} while (j < 10);

// LOOP through array
const cars = ["Ford", "Chevy", "Honda", "Toyota"];

for (let m = 0; m < cars.length; m++) {
  console.log(cars[m]);
}

// ForEach loop
cars.forEach(function (car, index, array) {
  console.log(`${index} : ${car}`);
  console.log(array);
});

// MAP
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Abdou" },
  { id: 3, name: "Karen" },
  { id: 10, name: "Kassim" },
];

const ids = users.map(function (user) {
  return user.id;
});

console.log(ids);

// FOR IN LOOP

const user = {
  firstName: "John",
  lastName: "Doe",
};

for (let x in user) {
  console.log(`${x} : ${user[x]}`);
}
