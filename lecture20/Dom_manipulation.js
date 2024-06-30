// window object(Root Element(top) of hierachy) => Global object
// window object created by browser.

// 1. DOM stands for Document Object Model.
// 2. The Document Object Model (DOM) is a programming interface for web documents,
// providing a structured representation of HTML and XML documents. It allows JavaScript
// to interact with and manipulate the content, structure, and style of web pages dynamically.

// 1. ================= Accessing DOM Elements =================

// Methods:
// 1) getElementById()
// - getElementById() is a method used to retrieve an HTML element from the DOM (Document Object Model) by its unique ID.
// - It takes a single argument, which is the ID of the element we want to select.
// - Once the element is selected, we can perform various operations such as updating its
//  content, modifying its style, or attaching event listeners to it.

// let result = document.getElementById("npara");
// console.log(result);

// 2) getElementsByClassName()
// - The method getElementsByClassName() returns a collection of elements with the specified class name.
// - The collection is in the form of array-like object of all the child elements which matches the given class name/names.

// let result = document.getElementsByClassName("textPara");
// console.log(result);

// 3) getElementsByTagName()
// - getElementsByTagName() is a powerful method in JavaScript used to fetch HTML elements from the DOM (Document Object Model) based on their tag names.
// - It accepts a single argument, which is the tag name of the elements to be selected.

// let result = document.getElementsByTagName("h1");
// console.log(result);

// There are two different Query Selectors :
// 1. querySelector()
// - Returns the first element within the document that matches the specified selector or group of selectors.
// - If no matches are found, it returns null.

// let result = document.querySelector("#spara");
// let result = document.querySelector(".textPara");
// let result = document.querySelector("p");
// console.log(result);

// 2. querySelectorAll()
// - It returns a static NodeList representing a list of elements that match the specified group of selectors.
// - If no matches are found, it returns an empty NodeList.

// let result = document.querySelectorAll("p");
// let result = document.querySelectorAll(".textPara");
// let result = document.querySelectorAll("#fpara");
// console.log(result);

// 2. ================= Update Existing DOM Elements =================

// 1) innerHTML
// - The innerHTML property allows us to retrieve or replace the HTML content within an element.

// Get
// let result = document.querySelector(".container");
// console.log(result);
// console.log(result.innerHTML);

// Set
// result.innerHTML = "<p>Hello World</p>";
// console.log(result);

// 2) outerHTML

// Get
// let myElement = document.getElementById("myPara");
// let content = myElement.outerHTML;
// console.log(content);

// Set
// let newPara = "<div>Hiii</div>";
// myElement.outerHTML = newPara;

// 3) innerText

// - The innerText property retrieves or sets the text content of the specified element, excluding any HTML tags.
// - It represents only the visible text within the element, without considering its child elements.

// Get
// let myElement = document.getElementById("myPara");
// let content = myElement.innerText;
// console.log(content);

// Set
// let newPara = "Hiii";
// myElement.innerText = newPara;

// 4) textContent

// Get
// let myElement = document.getElementById("myPara");
// let content = myElement.textContent;
// console.log(content);

// Set
// let newPara = "Hiii";
// myElement.textContent = newPara;

// 3. ================= Add DOM Elements =================

// 1) createElement()
// - It is used to create new HTML elements dynamically.

// 2. appendChild()
// - To add a node to the end of the list of child nodes of a specified parent node

// let newElement1 = document.createElement("h4");
// console.log(newElement1);
// newElement1.innerText = "Hello World India";

// bodyTag = document.querySelector("body");
// bodyTag.appendChild(newElement1);

// 3. insertAdjacentElement()

// let mydiv = document.querySelector("#mydiv");

// let newElement = document.createElement("span");
// newElement.textContent = "Harshil Khatri";

// Element pehla beforebegin
// Element pachi afterend
// mydiv.insertAdjacentElement("beforebegin", newElement);
// mydiv.insertAdjacentElement("afterend", newElement);

// Element start begin afterbegin
// Element end beforeend

// mydiv.insertAdjacentElement("afterbegin", newElement);
// mydiv.insertAdjacentElement("beforeend", newElement);

// 4. ================= Remove DOM Elements =================

// 1) removeChild()
// - To remove a specified child node from its parent node in the DOM tree.
let parentElement = document.querySelector(".container");
let childElement = document.querySelector(".text_heading");

parentElement.removeChild(childElement);
