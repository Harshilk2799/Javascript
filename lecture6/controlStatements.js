// What are conditional statement?
// - Used for decision-making, a decision is made by the conditional.
// - Statement based on an expression that is passed, either true or false.
// - Type of control flow statement.
// - Also known as decision making.

// Statement in Javascript
// - Used to declare variables, functions and to control the flow of the program.
// - Statements do not necessarily produce a value.

// Expression in Javascript
// - Expression produce a value.
// - It can be combination of variables, literals and operators.
// - Used within statements to perform computations or generate value.
// - Arithmetic Expressions, Logical Expressions.

// What are control flow statements?
// - Used to control the execution of a program based on a specific condition.
// - If the condition meets then a particular block of action will be executed.
// - Otherwise it will execute another block of action that satisfies that particular condition.
// - Determine the order in which statements are executed.

// Note: Not all statements are expression, But many statements can include expression.
// All expression can be statement.
// all statement can not be expression.

// Types of conditional statements:
// - if statement

// let x = 10;
// if (x > 5) {
//   console.log(x);
// }

// - if...else statement

// let code = 19;
// if (code > 18) {
//   console.log("Working code...");
// } else {
//   console.log("Not working code...");
// }

// - if...else if...else statement

let x = 45;
if (x > 20 && x < 29) {
  console.log("Above 20 value: ", x);
} else if (x > 30 && x < 39) {
  console.log("Above 30 value: ", x);
} else {
  console.log("Above 40 value:", x);
}
// - switch statement
// - The switch statement is used to perform different actions based on different conditions.
// - It evaluates an expression and executes the associated block of code (case) that matches the value of the expression.
let day = 1;

let dayName;

switch (day) {
  case 0:
    dayName = "Sunday";
    break;
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wedneday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;

  default:
    dayName = "No day...";
    break;
}
console.log(dayName);

// - ternary operator (conditional operator)
// - The ternary operator is a shorthand way to write an if...else statement.
// It consists of three operands:
// 1. a condition followed by a question mark ?
// 2. then an expression to execute if the condition is true, followed by a colon :
// 3. and finally an expression to execute if the condition is false.

// Syntax: condition ? expressionIfTrue : expressionIfFalse;
let Age = 25 > 18 ? console.log("Get a job...") : console.log("Get a study...");
