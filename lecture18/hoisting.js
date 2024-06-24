// Hoisting in JavaScript is a behavior where variable and function declarations are
// moved to the top of their respective scopes during the compilation phase, before the
// code is executed.

// 1. Function Hoisting
// msg();
// Function declaration
// function msg() {
//   console.log("Hello World");
// }

// Behid the scene
// {
//   Function declaration
//   function msg() {
//     console.log("Hello World");
//   }
//   msg();
// }

// 2. Variable Hoisting
// Hoisting with var

// console.log(x);
// var x = 10;
// console.log(x);

// This is equivalent to:
// var x;
// console.log(x);
// x = 5;
// console.log(x);

// => The declaration var x is hoisted, but not the initialization. So x exists but is undefined until it's assigned a value.

// Hoisting with let and const

// console.log(y); // Throws ReferenceError: Cannot access 'y' before initialization
// let y = 55;
// console.log(y);

// console.log(z); // Throws ReferenceError: Cannot access 'z' before initialization
// const z = 15;

// 3. Function Expression = Hoisting is not possible

// sayHello();
// let sayHello = function () {
//   console.log("Hello World");
// };
