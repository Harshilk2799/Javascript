// Promise
// => Promises in JavaScript are used to handle asynchronous operations.
// => A promise object is created using the new keyword and its constructor.
// => This constructor takes a function, called the "executor function" as its parameter.
// => This function should take two functions as parameters.
// => The first of these functions (resolve) is called when the asynchronous task completes successfully
//      and return the results of the task as a value.
// => The second (reject) is called when the task fails, and return the reason for failure, which is typically an error object.

// Promise States:
// 1. Pending: The initial state, neither fulfilled nor rejected.
// 2. Fulfilled: The operation completed successfully.
// 3. Rejected: The operation failed.

// let promiseObj = new Promise((resolve, reject) => {
//   let success = true;
//   if (success) {
//     resolve("Promise Fulfilled!");
//   } else {
//     reject("Promise Reject!");
//   }
// });

// then() method
// => The then() method returns a Promise.
// => It takes up to two arguments: callback function for the success and failure cases of the Promise.
// => As then method returns a Promise so we can do method chaining.
// => Syntax: then(onResolved, onRejected)
// => onResolved = A function called if the Promise is fulfilled. This function has one argument, the fulfillment value.
// => onRejected = A function called if the Promise is rejected. This function has one argument, the rejection reason.

// catch() method
// => The catch() method returns a Promise and deals with rejected cases only.
// => The catch method is used for error handling in promise composition.
// => Syntax: catch(callback)
// => Where the callback is a function called when the Promise is rejected.
//  This function has one argument error - The rejection error.

// finally() method
// => The finally() method retuns a Promise.
// => Syntax: finally(callback)

// promiseObj
//   .then((message) => {
//     console.log("Resolve: ", message);
//   })
//   .catch((error) => {
//     console.log("Reject: ", error);
//   });

// // Promises chaining / then chaining
// promiseObj
//   .then((message) => {
//     console.log("Resolve: ", message);
//     return "Promise fulfilled second message";
//   })
//   .then((message) => {
//     console.log("second message: ", message);
//     return "Promise fulfilled third message";
//   })
//   .then((message) => {
//     console.log("Third message: ", message);
//   })
//   .catch((error) => {
//     console.log("Reject: ", error);
//   })
//   .finally((message) => {
//     console.log("Always run code");
//   });

// =====================================
let promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "First");
});
let promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "Second");
});
let promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, "Third");
});

Promise.all([promise3, promise2, promise1])
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.error(error);
  });
