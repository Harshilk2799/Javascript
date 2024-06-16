// 1. charAt(index) => Returns the character at the specified index position.
// let fullName = "Harshil Khatri";
// console.log(fullName.charAt(6));

// 2. charCodeAt(index) => Returns the Unicode value of the character at the specified index position.
// console.log(fullName.charCodeAt(5));

// 3. concat(string1, string2, ..., stringN) => Combines the text of two or more strings and returns a new string.
// let firstName = "Harshil";
// let lastName = " Khatri";
// console.log(firstName.concat(lastName));

// 4. toLowerCase() => Converts the string to lowercase letters.
// console.log("HELLO WORLD".toLowerCase());

// 5. toUpperCase() => Converts the string to uppercase letters.
// console.log("hello world".toUpperCase());

// 6. slice(start, end) => Extracts a section of the string from the start index to the end index (not inclusive) and returns it as a new string.
// console.log("Hello World".slice(2, 5));
// console.log("Hello World".slice(2, -4));

// 7. substring(start, end) => Returns a substring between the start and end index positions (not inclusive of the end index).
// console.log("Hello World".substring(2, 5));
// console.log("Hello World".substring(-2, 5)); // -2 negative value convert into 0 value (only substring)

// 8. split(separator): Splits the string into an array of substrings using the specified separator.
// let lang = "Javascript Python Java PHP";
// let arr = lang.split(" ");
// console.log(arr);

// 9. includes(searchString): Returns true if the string contains the specified searchString.
// let msg = "Hello World How are you?";
// console.log(msg.includes("World"));
// console.log(msg.includes("hello"));

// 10. replace(old_string, new_string) => Replace first occurrences
// console.log("Dev Test Framework Dev".replace("Dev", "JS"));

// 11. replaceAll(old_string, new_string) => Replaces all occurrences
// console.log("Dev Test Framework Dev".replaceAll("Dev", "JS"));

// 12. trim() => Removes whitespace from both ends of the string.
// console.log("   Hello World     ".trim());

// 13. trimStart(): Removes whitespace from the start of the string.
// console.log("     Hello World      ".trimStart());

// 14. trimEnd(): Removes whitespace from the end of the string.
// console.log("     Hello World    ".trimEnd());

// 15. padStart(targetLength, padString) => Pads the current string with the provided padString from the start until the string reaches the targetLength.
// console.log("Hello".padStart(10, "*"));

// 16. padEnd(targetLength, padString) => Pads the current string with the provided padString from the end until the string reaches the targetLength.
// console.log("Hello".padEnd(10, "*"));

// 17. startsWith(searchString): Returns true if the string starts with the specified searchString.
// console.log("Hello".startsWith("H"));
// console.log("Hello".startsWith("j"));

// 18. endsWith(searchString): Returns true if the string ends with the specified searchString.
// console.log("Hello World".endsWith("f"));
// console.log("Hello World".endsWith("d"));

// 19. repeat(count): Returns a new string that is the concatenation of the current string repeated count times.
// console.log("Hello".repeat(3));

// 20. indexOf(searchString): Returns the index of the first occurrence of the specified searchString.
// console.log("Hello World".indexOf("World"));
// console.log("Hello World".indexOf("z"));

// 21. lastIndexOf(searchString): Returns the index of the last occurrence of the specified searchString.
console.log("Hello World Hello".lastIndexOf("Hello"));
