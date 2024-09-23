// Async-Await

// Async functions:
// 1. Declared using the async keyword before a function
// 2. Always return a promise
// 3. Allow the use of the await keyword inside them
// async makes a function return a Promise

// Await keyword:
// 1. Used inside async functions to pause execution until a promise is resolved
// 2. Makes asynchronous code look and behave more like synchronous code
// await makes a function wait for a Promise

// Way 1: async funcion
// async function helloMsg(){}

// async function test() {
//   return "Hello";
// }
// test().then((result) => {
//   console.log(result);
// });

// Way 2: async Function Expression
// let helloMsg = async function(){}

// Way 3: async Arrow Function
// let helloMsg = async ()=>{}

// Scenario:
// 1. prepare url/ API endpoint => sync
// 2. await / fetch data => network call => async
// 3. process data =>  sync

// async function getData() {
//   // get request = async
//   let response = await fetch("https://jsonplaceholder.typicode.com/users/2");
//   // parse json = async
//   let data = await response.json();
//   console.log(data);
// }
// getData();

async function postData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "Javascript Developer",
      body: "Javascript Description",
      userId: 1,
    }),
  });

  let data = await response.json();
  console.log(data);
}

postData();
