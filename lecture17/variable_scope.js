// What are var, let and const keywords ?

// - Different keywords for declaring a variable.
// - Before 2015, "var" keyword was used in all javascript code from 1995 to 2015.
// - The let and const keywords were added to javascript in 2015 (ES6).

// Variable Scoping
// -> Variable scoping in JavaScript determines where variables are accessible within your code.
// -> Different types of scope:
// 1. Global Scope
// - globalVar is accessible everywhere in the script.

// 2. Function Scope
// - Variables declared inside a function
// - Accessible only within that function

// 3. Block Scope
// - Variables declared inside a block (like if statements or loops)
// - Only accessible within that block
// - Introduced with let and const in ES6

// 1. Global Scope

// var age = 15;
// let age = 15;
// const age = 15;
// console.log(age);

// {
//   console.log(age);
// }

// if (true) {
//   console.log(age);
// }

// for (let i = 0; i < 2; i++) {
//   console.log(age);
// }

// function sayHello() {
//   console.log(age);
// }
// sayHello();

// 2. Function Scope
// function sayHello() {
//   var fullName = "Harshil Khatri";
//   console.log("Hello World", fullName);
// }
// console.log(fullName);
// sayHello();

// 3. Block Scope

// {
//   let new_age = 45;
//   console.log(new_age);
// }
// console.log(new_age);

// {
//   const new_age = 45;
//   console.log(new_age);
// }
// console.log(new_age);
