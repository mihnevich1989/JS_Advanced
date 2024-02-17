'use strict';
console.log(Number('10'));
console.log(+'11');
console.log(Number.parseInt('12', 10));
console.log(Number.parseInt('13 sec', 10));
console.log(Number.parseInt('sec 14', 10)); // NaN

console.log(Number.parseFloat('12.5', 10));
console.log(Number.parseFloat('13.5 sec', 10));
console.log(Number.parseFloat('sec 14.5', 10)); // NaN

console.log(Number.isNaN(Number('12abc')));
console.log(10 / 0);
console.log(Number.isFinite(10 / 0));
console.log(Number.isFinite(10));

console.log(Number.isInteger(10));
console.log(Number.isInteger(10.5));
