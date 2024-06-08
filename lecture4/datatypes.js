// Whare are data types in Javascript?

// Data types indiciates the type of data assigned to a variable that a computer can understand
// and perform operations on the data accordingly based on the type of data.

// data types are divided into two categories:

// 1. primitive data types

// String / Number / Boolean / Null / Undefined / BigInt / Symbol

// 1. String: This data type represents a sequence of characters (e.g., "Hello, World!").
let Name = "Harshil";
console.log(Name, typeof Name);

// 2. This data type represents both integers and floating-point numbers (e.g., 42, 3.14).
let Age = 45;
let Amount = 4525.45;
console.log(Age, Amount, typeof Age);

// 3. Boolean: This data type has only two possible values: true or false.
let Male = true;
console.log(Male, typeof Male);

// 4. Null: This data type represents a non-existent or invalid value.
let NullValue = null;
console.log(NullValue, typeof NullValue);

// 5. Undefined: This data type represents a variable that has been declared but has not been assigned a value.
let firstName;
console.log(firstName, typeof firstName);

// 6. BigInt (introduced in ES2020): This data type represents integers of arbitrary length.
let myRandomNumber = BigInt(54444444444444444444444444444444444444444);
console.log(myRandomNumber, typeof myRandomNumber);

// 7. Symbol (introduced in ES6): This data type represents a unique and immutable identifier.

// Key points: primitive data types

// 1. It stores single value
// 2. It stores value directly in stack

// 2. reference data types (non-primitive data types)

// Object, Array, Function and Date

let obj = {
  firstName: "Harshil",
  lastName: "Khatri",
};

console.log(obj);

let numbers = [45, 59, 2, 9, 6, 79, 56];
console.log(numbers);

// Key points: reference data types

// 1. It can store multiple values
// 2. It stores actual value in HEAP, and its reference in Stack.

// Example 1
// let obj1 = {};
// let obj2 = {};

// console.log(obj1 == obj2);

// Example 2
// let obj1 = {};
// let obj2 = obj1;

// console.log(obj1 == obj2);

// Example 3
let obj1 = {};
let obj2 = obj1;

obj1.name = "Harshil";
obj2.age = 26;

console.log(obj1, obj2, obj1 == obj2);
