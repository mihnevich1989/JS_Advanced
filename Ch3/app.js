'use strict';
let obj = { a: 1 };
let objB = { b: 2 };
const wMap = new WeakMap();

wMap.set(obj, 'testA');
wMap.set(objB, 'testB');

console.log(wMap);
console.log(wMap.get(obj));
console.log(wMap.has(obj));

wMap.delete(obj);

setTimeout(() => {
  console.log(wMap);
}, 1000);

let cache = new WeakMap();

function getValue(obj) {
  if (!cache.has(obj)) {
    let res = 1;
    cache.set(obj, res);
  }
  return cache.get(obj);
}

const res = getValue(objB);
console.log(res);
const res2 = getValue(objB);
console.log(res2);
