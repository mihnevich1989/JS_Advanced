'use strict';

function convertCurrency(summ, insertedCurrency, setedCurrency) {
  const allCurrencies = [
    { name: 'USD', mult: 1 },
    { name: 'BYN', mult: 1 / 60 },
    { name: 'EUR', mult: 1.1 }
  ];
  const initial = allCurrencies.find(c => c.name == insertedCurrency);
  if (!initial) return null;
  const convert = allCurrencies.find(c => c.name == setedCurrency);
  if (!convert) return null;

  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: convert.name
  }).format(summ * initial.mult / convert.mult);
}

console.log(convertCurrency(200, 'BYN', 'USD'));
console.log(convertCurrency(200, 'BYN', 'EUR'));
console.log(convertCurrency(200, 'USD', 'BYN'));
console.log(convertCurrency(200, 'EUR', 'BYN'));
console.log(convertCurrency(200, 'USD', 'EUR'));
console.log(convertCurrency(200, 'EUR', 'USD'));
console.log(convertCurrency(200, 'CYN', 'USD'));
console.log(convertCurrency(200, 'USD', 'CYN'));
