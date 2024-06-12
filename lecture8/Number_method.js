let num = "56";
console.log("number: ", num, "type: ", typeof num);

let con_num = Number(num);
console.log("number: ", con_num, "type: ", typeof con_num);

let num2 = parseInt(45.9);
console.log(num2);

let num3 = parseFloat(45.45464);
console.log(num3);

console.log(isFinite(45));
console.log(isFinite(NaN));

console.log(isNaN("hello"));

console.log(Number.isInteger(45));
console.log(Number.isInteger("Hello"));

let num4 = 45.48489979;
console.log(num4.toFixed(2));

let num5 = 45.464644684;
console.log(num5.toPrecision(4));

let hundreds = 100000;
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString("en-IN"));
