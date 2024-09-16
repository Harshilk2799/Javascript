// Synchronous Programming vs Asynchronous Programming

// Synchronous Programming
// Synchronous programming in JavaScript refers to the execution of code in a sequential, blocking manner.
// JavaScript runs on a single thread, meaning only one operation can be processed at a time.

// console.log("Script Start");

// for (let i = 1; i <= 10; i++) {
//   console.log("Inside for loop");
// }

// console.log("Script End");

// Asynchronous Programming
// Asynchronous programming in JavaScript allows code execution to continue without waiting for certain operations to complete.
// Multiple operations can be in progress simultaneously

// Topic = setTimeout, clearTimeout

// Example1
// console.log("Script Start");
// function hello() {
//   console.log("setTimeout Called");
// }
// setTimeout(hello, 1000);
// console.log("Script End");

// Example2
// console.log("Script Start");
// setTimeout(() => {
//   console.log("setTimeout Called");
// }, 1000);
// console.log("Script End");

// Example3
// console.log("Script Start");
// setTimeout(() => {
//   console.log("setTimeout Called");
// }, 0);

// for (let i = 1; i < 10; i++) {
//   console.log("demo");
// }
// console.log("Script End");

// Example4
console.log("Script Start");
const id = setTimeout(() => {
  console.log("setTimeout called");
}, 1000);

for (let i = 1; i < 4; i++) {
  console.log(i);
}
console.log("setTimeout is : ", id);
console.log("Clearing time out");
clearTimeout(id);
console.log("Script End");
