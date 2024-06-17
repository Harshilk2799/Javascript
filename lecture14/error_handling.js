// try {
//   //   let x = 45;
//   console.log("try block starts here");
//   console.log(x);
//   console.log("try block ends here");
// } catch (error) {
//   // retry logic
//   // fallback mechanism
//   // logging
//   // custom error
//   console.log("I am inside catch block");
//   console.log("Your error is here: ", error);
// } finally {
//   console.log("I will run everytime");
// }

// Create a Custom Error
try {
  // Reference Error
  console.log(x);
} catch (error) {
  throw new Error("Bhai pehle declare kro, fir print karna");
}
