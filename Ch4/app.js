'use strict';

const max = 2 ** 53 - 1;
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(max + 1);
console.log(max + 2);
console.log(max + 3);

//bigInt
console.log(23545123321245612132151231223n);
console.log(BigInt(23545123321245612132151231223));
console.log(BigInt('23545123321245612132151231223'));

console.log(10n + 10n);
//console.log(10n + 10); // error
//console.log(10.555n); // error
console.log(BigInt(10) + 10n);
console.log(23545123321245612132151231223n * 23545123321245612132151231223n);
console.log(typeof 10n);
