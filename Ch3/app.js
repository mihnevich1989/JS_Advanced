'use strict';

const weatherMap = new Map([
  ['London', 10],
  ['Minsk', 7],
  ['Paris', 8]
]);
console.log(weatherMap);
const weatherMap2 = new Map([...weatherMap].map(el => el.reverse()));
console.log(weatherMap2);

