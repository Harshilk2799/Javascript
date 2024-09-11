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

// Difference between dot and bracket notation.
// console.log(person["full name"]); // bracket notation
// console.log(person.hobbies); // dot
// person.skills = "Javascript"; // dot
// person["skills"] = "Javascript"; // bracket notation
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

// Iterate Objects
// let new_obj = {
//   name: "Harshil",
//   age: 26,
//   hobbies: ["reading", "writing", "painting"],
// };

// for in loop
// for (let key in new_obj) {
//   console.log(key, " : ", new_obj[key]);
// }

// Object.keys
// for (let key of Object.keys(new_obj)) {
//   console.log(new_obj[key]);
// }

// Computed properties
const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

// Wrong Way
// let newObj = {
//   key1: value1,
//   key2: value2,
// };

// Right Way (Method 1)
// let newObj = {
//   [key1]: value1,
//   [key2]: value2,
// };

// Right Way (Method 2)
// let newObj = {};
// newObj[key1] = value1;
// newObj[key2] = value2;
// console.log(newObj);

// Very useful in real world application
// const users = [
//   { id: 1, firstName: "Harshil", lastName: "Khatri" },
//   { id: 2, firstName: "Harsh", lastName: "Trivedi" },
//   { id: 3, firstName: "Bharat", lastName: "Shethwala" },
// ];

// for (let user of users) {
//   // console.log(user);
//   // console.log(user["firstName"]);
//   console.log(user.firstName);
// }

// Nested Destructing
// let [user1, user2, user3] = users;
// console.log(user1);
// console.log(user2);
// console.log(user3);

// let [{ firstName }, { id }, { lastName }] = users;

// console.log(firstName, id, lastName);

// Optional Chaining
// Optional chaining is a feature in JavaScript that allows you to safely access nested object
//  properties or call methods without explicitly checking if each level in the chain exists.
// It's denoted by the ?. operator.

const user = {
  name: "Alice",
  // address: {
  //   // street: "123 Main St",
  //   city: "Wonderland",
  // },
};

console.log(user?.address?.city);
console.log(user?.address?.street);
