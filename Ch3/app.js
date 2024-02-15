'use strict';

const weatherMap = new Map();
weatherMap
  .set('London', '10')
  .set('Minsk', '7');

const arr = [1, 2, 3];
const obj = { a: 1 }
console.log(weatherMap.has('Minsk'));
console.log(weatherMap.has('Msc'));
console.log(weatherMap.get('Minsk'));
// weatherMap.delete('London')
// console.log(weatherMap.delete('London'));
// weatherMap.clear()
weatherMap.set(arr, 'array')
weatherMap.set(obj, { b: 2 });
console.log(weatherMap.get(arr));
console.log(weatherMap.get(obj));
console.log(weatherMap);
console.log(weatherMap.size)

