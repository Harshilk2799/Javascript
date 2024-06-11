// while loop

// Syntax:

// initialization;
// do{
// Loop Logic
// Updation
// }while (condition);

// let i = 1;
// do {
//   console.log("Hello World");
//   i++;
// } while (i <= 6);

// Counting
// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 6);

// Reverse Couting
// let i = 6;
// do {
//   console.log(i);
//   i--;
// } while (i >= 1);

// break keyword
// let i = 1;
// do {
//   if (i == 4) {
//     break;
//   } else {
//     console.log(i);
//   }
//   i++;
// } while (i <= 6);

// continue keyword
let i = 1;
do {
  if (i == 4) {
    i++;
    continue;
  } else {
    console.log(i);
  }
  i++;
} while (i <= 6);
