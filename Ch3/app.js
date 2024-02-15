'use strict';

const weatherMap = new Map([
  ['London', 10],
  ['Minsk', 7],
  ['Paris', 8]
]);

console.log(weatherMap);

for (const [key, value] of weatherMap) {
  console.log(key);
  console.log(value);
}

console.log([...weatherMap]);

console.log(weatherMap.keys());
console.log([...weatherMap.keys()]);
console.log([...weatherMap.values()]);
