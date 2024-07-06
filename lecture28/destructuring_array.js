// Old Way
// let user = ["Yahoo Baba", 25];
// let name = user[0];
// let age = user[1];

// console.log(user);
// console.log(name);
// console.log(age);

// Destructuring Array(New ES6 Concept)
// let user = ["Yahoo Baba", 25];
// let [name, age] = user;

// default value
// let user = ["Yahoo Baba"];
// let [name, age = 20] = user;

// Override value
// let user = ["Yahoo Baba", 22];
// let [name, age = 20] = user;

// console.log(name);
// console.log(age);

// Nested Array
let user = ["Yahoo baba", 22, "Delhi", ["Male", 25000]];
let [name, age, city, [gender, salary]] = user;

console.log(name);
console.log(age);
console.log(city);
console.log(gender);
console.log(salary);
