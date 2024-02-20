'use strict';

const options1 = {
  style: 'currency',
  currency: 'BYN',
  useGrouping: false
};
const options2 = {
  style: 'currency',
  currency: 'USD'
};

const options3 = {
  style: 'decimal'
};

const options4 = {
  style: 'percent'
};

const options5 = {
  style: 'unit',
  unit: 'celsius' //fahrenheit
};

console.log(new Intl.NumberFormat('by-BY', options1).format(2300));
console.log(new Intl.NumberFormat('en-EN', options2).format(2300));
console.log(new Intl.NumberFormat('ru-RU', options3).format(10000));
console.log(new Intl.NumberFormat('ru-RU', options4).format(.1));
console.log(new Intl.NumberFormat('by-BY', options5).format(25));
