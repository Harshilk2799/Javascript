// What are operators in JS?
// - In simple terms, oprators in any programming language are just a basic
// building block used to perform operations on operands.

// What is an operand?
// - Operand can be a value or variable (eg. 3 or let a = 10)

// eg., operator operand OR operand operator
// "operator operand" is called a prefix unary operator.
// "operand operator" is called a postfix unary operator.

// Unary plus (+) :- converts the operand to number
// let n = "3";
// console.log(+n, typeof +n);

// Unary Negation (-) :- Performs negation of the operand
// let num = "3";
// console.log(-num, typeof -num);

// Logical Not (!) :- Negates the operand to a boolean value
// let Name = "harshil";
// console.log(!Name);

// Increment (++) :- Increase the value of a variable by 1
// let a = 5;
// console.log(++a);

// let b = 5;
// b++;
// console.log(b);

// Decrement (--) :- Decrease the value of a variable by 1
// let x = 5;
// console.log(--x);

// let y = 5;
// y--;
// console.log(y);

// Typeof Operator(typeof):- Determines the type of the operand or expression.
// console.log(typeof 5);

// 1. Arithmetic Operators
// 2. Assignment Operators
// 3. Comparison Operators
// 4. Logical Operator
// 5. Bitwise Operatos

// 1. Arithmetic Operators
// +, -, *, **, /, %
// let p = 45;
// let q = 2;
// let add = p + q;
// let sub = p - q;
// let mul = p * q;
// let expo = p ** q;
// let div = p / q;
// let mod = p % q;
// console.log("Addition: ", add);
// console.log("Subtraction: ", sub);
// console.log("Multiplication: ", mul);
// console.log("Exponential: ", expo);
// console.log("Division: ", div);
// console.log("Modular: ", mod);

// 2. Assignment Operators
// =, +=, -=, *=, /=, %=, **=
// let f = 5;
// let g = 3;
// f += g; //f = f + g
// f -= g; //f = f - g
// f *= g; //f = f * g
// f /= g; //f = f / g
// f %= g; //f = f % g
// f **= g; //f = f ** g
// console.log(f);

// 3. Comparison Operators: Used to compare values
// 1. Equality (==, ===)
// console.log(5 == "5");
// console.log(5 == 5);

// console.log(5 === "5");
// console.log(5 === 5);

// 2. Inequality (!=, !==)
// console.log(5 != "5");
// console.log(5 != 5);

// console.log(5 !== "5");
// console.log(5 !== 5);

// 3. Greater Than (>)
// console.log(5 > 3);

// 4. Less Than (<)
// console.log(5 < 3);

// 5. Greater Than or Equal to (>=)
// console.log(5 >= 2);

// 6. Less Than or Equal to(<=)
// console.log(6 <= 10);

// 4. Logical Operator(&&, ||, !)

// let ans = true && true && true;
// let ans = true && true && false;

// let ans = true || false || true;
// let ans = false || false || false;

// let ans = !true;
// let ans = !false;
// console.log(ans);

// Falsy values: 0, null, undefined, "", false, NaN
// truthy values: Anything which is not falsy

// Working with Non-Boolean(Logical Operator)

// if both the operands are true, then return the 2nd operand
// console.log(5 && 4);

// if both the operands are false, then return the 1st operand
// console.log(0 && "");

// if any one of the operand is false, then return the falsy operand
// console.log(0 && 5);

// if both the operands are true, then return the 1nd operand
// console.log(5 || 4);

// if both the operands are false, then return the 2st operand
// console.log(0 || "");

// if any one of the operand is false, then return the truthy operand
// console.log(0 || 5);

// 5. Bitwise Operatos (&, |, ~, <<, >>, ^)
// console.log(5 & 4);
// console.log(5 | 4);

// Bitwise Not (~) :- Inverts the bits of the operand
// let m = 5;
// console.log(~m);
