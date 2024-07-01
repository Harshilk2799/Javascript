// Template literals in JavaScript, introduced in ECMAScript 6 (ES6), are a way to create strings
// that allow embedded expressions and multi-line strings

// 1. Basic usage:
// const Name = "Harshil";
// const greeting = `Hello, ${Name}`;
// console.log(greeting);

// 2. Multi-line strings
// const multiLine = `This
// Is
// Javascript
// Template
// String`;
// console.log(multiLine);

// 3. Expression interpolation
// const num1 = 10;
// const num2 = 20;
// console.log(`The sume of ${num1} and ${num2} is ${num1 + num2}`);

// 4. Using with objects
const person = {
  name: "Harshil",
  age: 25,
  job: "Python Developer",
};
const introduction = `${person.name} is ${person.age} years old and works as a ${person.job}.`;
console.log(introduction);
