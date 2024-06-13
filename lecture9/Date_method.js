let now = new Date();
// let now = new Date("June 15 2024");
console.log(now);
console.log(typeof now);
console.log(now.toString());
console.log(now.toDateString());
console.log(now.toLocaleString());
console.log(now.getDate());
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDay());

now.setDate(20);
// now.setFullYear(2020);
// now.setMonth(10);
console.log(now);

console.log(now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear());
