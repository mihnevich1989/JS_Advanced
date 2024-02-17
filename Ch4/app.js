'use strict';

console.log(Math.sqrt(36));
console.log(36 ** (1 / 2));

console.log(Math.cbrt(27));
console.log(16 ** (1 / 4));

console.log(Math.sign(-100));
console.log(Math.sign(35));
console.log(Math.abs(-350));
console.log(Math.exp(2));

console.log(Math.max(1, 20, -2, '33', true, 15, 33.5));
console.log(Math.max(1, 20, -2, '33', true, 15, '45s')); //NaN
console.log(Math.min(1, 20, -2, '33', true, 15, '-10'));

const arr = [1, 20, -2, '33', true, 15, 33.5];
console.log(Math.max(...arr));
console.log(arr.reduce((a, b) => a > b ? a : b));
console.log(Math.random());
