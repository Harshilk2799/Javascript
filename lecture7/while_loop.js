// while loop

// Syntax:

// initialization;
// while (condition){
//  Loop Logic

// Updation
// }

// let i = 1;
// while (i <= 10) {
//   console.log("hello world");
//   i++;
// }

// Counting
// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// Reverse Couting
// let i = 10;
// while (i >= 1) {
//   console.log(i);
//   i--;
// }

// break keyword
// let i = 1;
// while (i <= 6) {
//   if (i == 4) {
//     break;
//   } else {
//     console.log(i);
//   }
//   i++;
// }

// continue keyword
let i = 1;
while (i <= 6) {
  if (i == 4) {
    i++;
    continue;
  } else {
    console.log(i);
  }
  i++;
}
