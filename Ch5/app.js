'use strict';

const now = new Date();
console.log(now);

console.log(new Date('01-01-2024'));
console.log(new Date('01/02/24'));
console.log(new Date('2024/03/01'));
console.log(new Date('01 apr 2024'));
console.log(new Date('01 апр 2024')); // invalid date

console.log(new Date(2024/12/10));
console.log(new Date(2024,12,10 + 100));
console.log(new Date(2024,12,10, 10, 5, 10));
console.log(new Date(0));
console.log(new Date(1 * 24 * 60 * 60 * 1000));
console.log(Date.now());
console.log(new Date(Date.now()));

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getTime());
console.log(new Date(now.setFullYear(2030)));

