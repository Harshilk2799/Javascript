// style method
// The style method allows us to directly access and modify CSS properties of an HTML element through its style object.

// let result = document.querySelector("h1");
// console.log(result.style);

// set
// result.style.color = "red";

// 'cssText' Method
// - The cssText is similar to the style method but the only difference is, using cssText we can handle multiple CSS properties in single string.
// - Syntax: element.style.cssText

// let result = document.querySelector("p");
// Get
// console.log(result.style.cssText);

// Set
// result.style.cssText =
//   "color: white; padding:10px; font-size: 18px; background-color: green;";

// setAttribute()
// - The setAttribute() method in JavaScript is used to add a new attribute or update an existing attribute on an HTML element.
// - Syntax: element.setAttribute(attributeName, attributeValue);

// let result = document.querySelector("p");
// result.setAttribute("class", "textPara");

// getAttribute()
// - The getAttribute() method in JavaScript is used to retrieve the value of a specified attribute on an HTML element.
// - Syntax: element.getAttribute(attributeName);

// className
// - It is used to get or set the value of the class attribute of an HTML element.

// let result = document.querySelector("p");
// // Get
// console.log(result.className);
// // Set
// result.className = "paraClass textClass";

// classList
let result = document.querySelector("h2");
// console.log(result.classList);

result.classList.add("thirdClass");
result.classList.remove("firstClass");
result.classList.replace("secondClass", "SecondClass");
// result.classList.toggle("thirdClass"); // false
// result.classList.toggle("thirdClass"); // true
result.classList.contains("thirdClass"); // true
