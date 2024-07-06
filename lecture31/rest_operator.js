// Rest Operator: Pack Elements
// The rest operator is typically used in function parameters and destructuring assignments.

// function sum(num1, num2) {
//   return num1 + num2;
// }
// console.log(sum(5, 8));

// Passing Parameter time used Rest Operator
// function sum(num1, num2, ...args) {
//   console.log(args); // Contains Array
//   let total = 0;
//   for (let num of args) {
//     // console.log(num);
//     total += num;
//   }
//   console.log(total);
// }

// let numbers = [4, 5, 6, 8];
// sum(...numbers); // Calling time used Spread Operator

// console.log(Math.max(4, 5, 6, 8));
// const numbers = [4, 5, 84, 65];
// console.log(Math.max(...numbers));

// Destructuring with Rest Operator
const user = {
  name: "Harshil",
  city: "Ahemdabad",
  street: "Main Street",
};

const { name, ...address } = user;
console.log(name);
console.log(address);
