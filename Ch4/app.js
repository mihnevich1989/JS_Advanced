'use strict';

function btwNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(btwNumber(2, 3));
