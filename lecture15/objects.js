//1. JavaScript objects are fundamental data structures that enable the
// organization and storage of data in the form of key-value pairs.

// 2. Objects are unordered collection of key value pairs.

// Object Creation
let person = {
  firstName: "Harshil",
  lastName: "Khatri",
  "full name": "Harshil Khatri",
  age: 25,
  hobbies: ["reading", "writing", "painting"],
  message: function () {
    console.log("Hi, My name is " + this.firstName);
  },
};

// console.log(person);
// person.message();
// console.log(typeof person);
// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));

// Access Properties
// console.log(person.firstName);
// console.log(person["lastName"]);

// Modifying objects

// 1. Adding Property
// person.salary = 10000;
// console.log(person);

// 2. Deleting the properties
// console.log(person);
// delete person.age;
// console.log(person);

// 3. Changing values of properties
// console.log(person);
// person.firstName = "Harsh";
// console.log(person);

// Object Cloning
// Object cloning in JavaScript is a task primarily used when we want to duplicate an
// object's structure and values without directly referencing the original object.
// This is useful when we need to modify or manipulate the duplicated object independently
// from the original.

// 1. Spread Operator
// let new_obj = {
//   name: "Harshil",
//   age: 26,
//   hobbies: ["reading", "writing", "painting"],
// };

// let new_obj_new = { ...new_obj };
// new_obj.age = 45;
// console.log("New Obj: ", new_obj);
// console.log("New Obj New:", new_obj_new);

// 2. Assign method
// let new_obj = {
//   name: "Harshil",
//   age: 26,
//   hobbies: ["reading", "writing", "painting"],
// };

// let new_obj_new = Object.assign({}, new_obj, { color: "white" });
// new_obj.age = 45;
// console.log("New Obj: ", new_obj);
// console.log("New Obj New:", new_obj_new);

// 3. Iteration
// let new_obj = {
//   name: "Harshil",
//   age: 26,
//   hobbies: ["reading", "writing", "painting"],
// };

// let new_obj_new = {};
// for (let key in new_obj) {
//   let newKey = key;
//   let newValue = new_obj[key];
//   // Insert newKey and newValue in new_obj_new and create a clone
//   new_obj_new[newKey] = newValue;
// }
// new_obj.age = 45;
// console.log("New Obj: ", new_obj);
// console.log("New Obj New:", new_obj_new);
