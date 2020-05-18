// defines an object literal
const person = {
  firstName: "Steve",
  lastName: "Yvon",
  age: 30,
  email: "steve@aol.com",
  hobbies: ["music", "sports"],
  address: {
    city: "Miami",
    State: "FL",
  },
  getBirthYear: function () {
    return 2020 - this.age;
  },
};

let val;

val = person;
// Get specific value
val = person.firstName;
val = person["lastName"];
val = person.age;
val = person.hobbies[1];
val = person.address["city"];
val = person.getBirthYear();

console.log(val);

const people = [
  { name: "Eli", age: 27 },
  { name: "Mike", age: "24" },
  { name: "Nancy", age: "40" },
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}
