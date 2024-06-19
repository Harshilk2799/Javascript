// Immediately Invoked Function Expressions (IIFE)
// - Immediately Invoked Function Expressions (IIFEs) in JavaScript are functions that are executed immediately after they are defined
(function () {
  console.log("Hello World");
})();

// Use Case:
// 1. Data Privacy => The primary use case of IIFEs is to obtain data privacy because any variables declared within the IIFE cannot be accessed by the outside world.
// 2. Initialization Code => IIFEs are commonly used to encapsulate initialization code that only needs to run once, especially when working with third-party libraries.
