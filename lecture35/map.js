// Maps
// => A Map object in JavaScript is a collection of key-value pairs where both the keys and values can be of any type.
// => Map is an iterable
// => Keys can be of any type, including functions, objects, and primitive types.
// => Duplicate keys are not allowed like objects

// const person = new Map();
// person.set("firstName", "Harshil");
// person.set("Age", 25);
// person.set(1, "one");
// person.set([1, 2, 3], "Array");
// console.log(person);

// console.log(person.get("firstName"));
// console.log(person.get(1));

// console.log(person.keys());
// console.log(person.values());
// console.log(person.entries());

// for (let key of person.keys()) {
//   //   console.log(key);
//   console.log(typeof key);
// }

// for (let key of person) {
//   //   console.log(key);
//   //   console.log(typeof key);
//   console.log(Array.isArray(key));
// }

// for (let [key, value] of person) {
//   console.log(key, value);
// }

const person = new Map([
  ["firstName", "Harshil"],
  ["firstName", "Harshil"],
  ["Age", 25],
]);
console.log(person);
