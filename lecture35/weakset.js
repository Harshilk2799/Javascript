// WeakSet
// => WeakSet can only store objects, not primitive values.
// => WeakSets Are Not iterable

const weakSet = new WeakSet();
console.log(weakSet); // WeakSet {}

let obj = {
  message: "Hi",
  sendMessage: true,
};

// adding object (element) to WeakSet
weakSet.add(obj);

console.log(weakSet); // WeakSet {{message: "Hi", sendMessage: true}}
