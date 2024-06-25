// => A function call stack in JavaScript is a mechanism that keeps track of function calls
// during the execution of a program.
// => It operates on a Last-In-First-Out (LIFO) principle, meaning the most recently called
// function is at the top of the stack and will be the first to complete and be removed.

function firstFunction() {
  console.log("Inside firstFunction");
  secondFunction();
  console.log("Back in firstFunction");
}

function secondFunction() {
  console.log("Inside secondFunction");
  thirdFunction();
  console.log("Back in secondFunction");
}

function thirdFunction() {
  console.log("Inside thirdFunction");
}

console.log("Starting main execution");
firstFunction();
console.log("Finished main execution");
