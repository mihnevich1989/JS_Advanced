'use strict';
let a = { a: 1 };
let b = { b: 2 };
const wSet = new WeakSet([a, b]);

console.log(wSet);

a = null;

setTimeout(() => {
  console.log(wSet);
}, 1000);
