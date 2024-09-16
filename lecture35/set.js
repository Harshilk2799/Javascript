// Set
// => Set is a built-in object that allows you to store unique values of any type.
// => No index-based access
// => Set is an iterable
// => Sets are unordered collections of unique values

// const numbers = new Set([1, 2, 3, 3, 3, 5, 6, 9]);
// console.log(numbers);

const numbers = new Set();
numbers.add(5);
numbers.add("Hello");
numbers.add(2.6);

// remove all elements of Set
// numbers.clear();
console.log(numbers);

// console.log(numbers.size);

// Deleting elements
// numbers.delete(5);
// console.log(numbers);

// Checking for elements
// console.log(numbers.has(2.6));

// for...of loop
// for (let num of numbers) {
//   console.log(num);
// }

const myArray = [1, 2, 4, 4, 5, 6, 5, 6];
const uniqueElements = new Set(myArray);
console.log(uniqueElements);
