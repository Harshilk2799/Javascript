// In Javascript, a string is a sequence of characters used to represent text.
// Strings are one of the basic types of data in javascript.
// They can be written using double quotes("") or single quotes('').
// String are immutable in javascript that means you can't directly change the character of
// an string.

let firstName = "harshil";
// console.log(firstName, "Type: ", typeof firstName);

// Concatination
let var1 = "Hello ";
let var2 = "World";
let result = var1 + var2;
// console.log("Concat: ", result);

// Escape Sequences
// - String in javascript can include special characters using escape sequences,
// prefixed with a backslash("\")
// `\\` - Show Single Backslash
// `\n` - New Lne
// `\t` - Tab
// `\b` - Backspace

// console.log("Hello World's");
// console.log('Hello World"s');
// console.log("Hello World\\s");
// console.log("Hello \nWorld");
console.log("Hello \tWorlds");
console.log("Hello \bWorlds");

// length = Returns the length of the string
let fullName = "Harshil Khatri";
console.log(fullName.length);

// console.log(fullName[2]);
console.log(fullName[5]);
