// Two Way to create array:
// 1. Array Literals
// 2. Array Constructor

// Array Literal Notation '[]'
// let arr = [1, 2, 3, "Hello", 45.65];
// console.log(arr);
// console.log("Type: ", typeof arr);

// Array Constructor
// let arr2 = new Array(45, true, "World", null);
// console.log(arr2);
// console.log("Type: ", typeof arr2);

// Access Particular value
// let arr = ["Hello", "World", true, 45, 89.2];
// console.log(arr[3]);

// length properties
// let fruits = ["apple", "banana", "orange"];
// console.log(fruits.length); // Output: 3

// Built-in Methods
// 1. push() => The push() method adds one or more elements to the end of an array and returns the new length of the array.
// let fruits = ["apple", "banana"];
// let new_fruits = fruits.push("orange");
// console.log(fruitss);
// console.log(new_fruits);

// 2. pop() => The pop() method removes the last element from an array and returns that element.
// let fruits = ["apple", "banana", "orange"];
// let lastfruit = fruits.pop();
// console.log(fruits);
// console.log(lastfruit);

// 3. shift() => The shift() method removes the first element from an array and returns that element.
// let fruits = ["apple", "banana", "orange"];
// let firstFruit = fruits.shift();
// console.log(fruits);
// console.log(firstFruit);

// 4. unshift() => The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
// let fruits = ["banana", "orange"];
// let newLength = fruits.unshift("apple");
// console.log(fruits);
// console.log(newLength);

// 5. concat() => The concat() method is used to merge two or more arrays and returns a new array.
// let fruits1 = ["apple", "banana"];
// let fruits2 = ["orange", "mango"];
// let allFruits = fruits1.concat(fruits2);
// console.log(allFruits);

// 6. slice() => The slice() method returns a shallow copy of a portion of an array into a new array object.
// let fruits = ["apple", "banana", "orange", "mango"];
// let someFruits = fruits.slice(0, 2);
// console.log(someFruits);

// 7. indexOf() => The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
// let fruits = ["apple", "banana", "orange", "banana"];
// // let indexfruit = fruits.indexOf("banana");
// let indexfruit = fruits.indexOf("banana_new");
// console.log(indexfruit);

// 8. reverse() => The reverse() method reverses the order of the elements in an array.
// let fruits = ["apple", "banana", "orange"];
// console.log(fruits);
// fruits.reverse();
// console.log(fruits);

// 9. splice()
// Syntax: array.splice(start, deleteCount, item1, item2, ...)

// 1.Removing elements from an array:
// let fruits = ["apple", "banana", "orange", "kiwi"];
// let removeFruits = fruits.splice(1, 2); // Remove 2 elements starting from index 1
// console.log(fruits);
// console.log(removeFruits);

// 2. Adding elements to an array:
// let fruits = ["apple", "banana"];
// fruits.splice(1, 0, "orange", "kiwi");
// console.log(fruits);

// 3. Replacing elements in an array:
// let fruits = ["apple", "banana", "orange"];
// fruits.splice(1, 2, "mango", "pear");
// console.log(fruits);

// 4. Removing all elements from an array:
// let fruits = ["apple", "banana", "orange"];
// fruits.splice(0);  // Remove all elements from the array
// console.log(fruits);

// 10. includes() => The includes() method determines whether an array includes a certain value among its entries.
// let fruits = ["apple", "banana", "orange"];
// // let hasfruit = fruits.includes("banana");
// let hasfruit = fruits.includes("new");
// console.log(hasfruit);

// 11. join(): The join() method creates and returns a new string by concatenating all the elements in an array, separated by commas or a specified separator string.
// let fruits = ["apple", "banana", "orange"];
// let fruitString = fruits.join(", ");
// console.log(fruitString);

// 12. map()
// let arr = [10, 20, 30];

// let result = arr.map(function (num) {
//   return num ** 2;
// });
// console.log(result);

// let result = arr.map((num) => {
//   return num ** 2;
// });
// console.log(result);

// arr.map((num) => {
//   console.log(num);
// });

// arr.map((num, index) => {
//   console.log("Number: ", num, "Index: ", index);
// });

// 13. filter()
// let arr = [10, 13, 20, 21, 56, 99];
// let result = arr.filter((num) => {
//   return num % 2 == 0;
//   //   if (num % 2 == 0) {
//   //     return true;
//   //   } else {
//   //     return false;
//   //   }
// });

// console.log(result);

// let arr = [45, "Hello", "World", true, 45.48, "Harshil"];
// let result = arr.filter((value) => {
//   if (typeof value === "string") {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(result);

// 14. reduce()
// let arr = [10, 20, 30];
// let result = arr.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);
// console.log(result);

// 15. sort() => The sort() method sorts the elements of an array in place and returns the sorted array.
// let numbers = [5, 3, 1, 4, 2];
// console.log(numbers);
// numbers.sort();
// console.log(numbers);

// 16. lastIndexOf() => The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present.
// let numbers = [1, 2, 3, 4, 2, 5];
// let index = numbers.lastIndexOf(2);
// console.log(index);

// forEach
// let arr = [10, 20, 30];
// arr.forEach((value, index) => {
//   console.log("Value: ", value, "Index: ", index);
// });

// let arr = [10, 20, 30, 40];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for..in loop

// Example 1: Iterating over an Object:
// let person = {
//   name: "Harshil",
//   age: 25,
//   city: "Ahmedabad",
// };
// for (let key in person) {
//   console.log("Key: ", key, "Value: ", person[key]);
// }

// Example 2: Iterating over an Array:
// let arr = [10, "Harshil", true, null, 45.2];
// for (let index in arr) {
//   console.log("Index: ", index, "Value: ", arr[index]);
// }

// for..of loop
// let arr = [10, 20, 30];
// for (let value of arr) {
//   console.log(value);
// }

// let str = "Harshil";
// for (let value of str) {
//   console.log(value);
// }

// let arr = [10, 20, 30, 40, 50];

// function getSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }
// let result = getSum(arr);
// console.log(result);
