// Fetch API
// => The fetch() method is used to send a network request.
// => It returns a Promise that resolves to the Response object.
// => This allows you to handle asynchronous code more effectively using .then() and .catch()

// Syntax:
// fetch(url, options)
//   .then(response => {
//     // Handle the response
//   })
//   .catch(error => {
//     // Handle any errors
//   });

// Parameter:
// 1. url: The resource URL
// 2. options: An object that allows you to customize the HTTP request (method, headers, body, etc.).

// GET (All Data)
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     // console.log(response.json());
//     return response.json();
//   })
//   .then((result) => {
//     for (let res in result) {
//       console.log(
//         `${result[res].id} - ${result[res].name} - ${result[res].username} - ${result[res].email}`
//       );
//     }
//     // console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// GET (Particular Data)
// fetch("https://jsonplaceholder.typicode.com/users/3")
//   .then((response) => {
//     // console.log(response.json());
//     return response.json();
//   })
//   .then((result) => {
//     console.log(
//       `${result.id} - ${result.name} - ${result.username} - ${result.email}`
//     );
//     // console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// POST
// Syntax:
// fetch(URL, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(obj),
// });

// fetch("https://jsonplaceholder.typicode.com/users", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     title: "Javascript Developer",
//     body: "Javascript Description",
//     userId: 1,
//   }),
// })
//   .then((response) => {
//     // console.log(response.json());
//     return response.json();
//   })
//   .then((result) => console.log(result))
//   .catch((error) => {
//     console.log(error);
//   });
