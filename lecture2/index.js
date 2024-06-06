// Variable
// - Variable in Javascript are containers that hold reusable data.

// - In Javascript we can declare a variable in different ways by using different keywords.
// - Each keyword holds some specific reason or feature in Javascript.
// - Basically we can declare variables in three different ways by using
//  var, let and const keyword.

// Rules for creating variables in JavaScript:

// 1. Variable Naming Rules:
// - Variable names must begin with a letter, an underscore (_), or a dollar sign ($).
// - Variable names are case-sensitive.
// - Variable names should be descriptive and meaningful, making your code more readable.
// - Avoid using reserved keywords (e.g., var, let, const, function, if, else, etc.) as variable names.

// 2. Variable Declaration:
// - In modern JavaScript (ES6 and later), you can declare variables using the let or const keywords.
// - let is used to declare a variable with a value that can be reassigned later.
// - const is used to declare a variable with a value that cannot be reassigned.
// - In older versions of JavaScript (ES5 and earlier), variables were declared using the var keyword, which has different scoping rules than let and const.

let Name = "Harshil";
console.log("Name: ", Name);

// Manipulation
let age = 45;
console.log("Before: ", age);
age = 25;
console.log("After: ", age);
