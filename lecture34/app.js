// import { firstName } from "./utils/name.js";
import { firstName as fname } from "./utils/name.js";
import Hello, { age } from "./utils/age.js";

// console.log(firstName, age);
console.log(fname, age);

Hello();

// export default
// You can only have one default export per module.

// Named exports are imported using curly braces: import { add, subtract } from './math.js';
// Default exports are imported without curly braces: import Math from './math.js';
