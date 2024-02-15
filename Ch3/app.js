'use strict';

const weatherMap = new Map([
  ['London', '10'],
  ['Minsk', '7']
]);

console.log(weatherMap);

const weatherObject = {
  london: 10,
  minsk: 7,
  paris: 8
}

console.log(Object.entries(weatherObject));
const weatherMap2 = new Map(Object.entries(weatherObject))
console.log(weatherMap2);
