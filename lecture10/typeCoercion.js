// What is Type Coercion ?
// - Coverting the data type of a variable from one type to another

// ------------------------------------------------

// Two types of Type Coercion:

// 1. Explicit Type Coercion
// - coders have to manually/explicitly tell javascript engine to do it.
// - also known as Type Casting

// 2. Implicit Type Coercion
// - happens automatically, javascript engine converts it internally

// -------------------------------------------------

// Three types of conversion:

// 1. to string
// 2. to boolean
// 3. to number

// -------------------------------------------------

// String Conversion

// String() for explicit

// String(boolean)
console.log(String(true), "Type: ", typeof String(true));
console.log(String(false), "Type: ", typeof String(false));

// String(number)
console.log(String(45), "Type: ", typeof String(45));

// String(undefined)
console.log(String(undefined), "Type: ", typeof String(undefined));

// String(null)
console.log(String(null), "Type: ", typeof String(null));

// String(Symbol)
console.log(String(Symbol()), "Type: ", typeof String(Symbol()));

console.log("Hello" + " World");
// "+" binary operator for implicit

// string + boolean
console.log("Hello" + true);

// string + number
console.log("Hello" + 45);

// string + undefined
console.log("Hello" + undefined);

// string + null
console.log("Hello" + null);

// string + symbol (TypeError: Implicit Conversion of Symbol is not allowed when converting to string type)
// console.log("Hello" + Symbol());

// -------------------------------------------------

// Boolean Conversion

// Boolean() for explicit

// Boolean(number)
console.log(Boolean(45));

// Boolean(undefined)
console.log(Boolean(undefined));

// Boolean(null)
console.log(Boolean(null));

// Boolean(Symbol())
console.log(Boolean(Symbol()));

// logical context (if, switch, loops), or logical operators (&&, ||, !, !!), ternary for implicit

// -------------------------------------------------

// Number Conversion

// Number() for explicit

// Number(boolean)
console.log(Number(true));

// Number(string)
console.log(Number("45")); // 45
console.log(Number("Hello")); // NaN

// Number(undefined)
console.log(Number(undefined));

// Number(null)
console.log(Number(null));

// Number(Symbol)  // TypeError: Explicit conversion not allowed
// console.log(Number(Symbol()));
