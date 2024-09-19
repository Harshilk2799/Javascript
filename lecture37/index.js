// setInterval and clearInterval

// Example 1
// console.log("Script Start");
// setInterval(() => {
//   console.log(Math.random());
// }, 1000);
// console.log("Script End");

// Example 2

console.log("Script Start");
const id = setInterval(() => {
  console.log("setTimeout called");
}, 1000);

for (let i = 1; i < 4; i++) {
  console.log(i);
}
console.log("setTimeout is : ", id);
console.log("Clearing time out");
clearInterval(id);
console.log("Script End");
