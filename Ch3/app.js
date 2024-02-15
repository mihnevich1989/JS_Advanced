'use strict';
console.log('hello');

const flights = ['Rus', 'USA', 'UK', 'Japan', 'China', 'UK', 'USA'];

const setFlights = new Set(flights);

console.log(setFlights);
console.log(setFlights.size);
console.log(setFlights.has('USA'));
console.log(setFlights.has('U'));
setFlights.add('France');
console.log(setFlights);
setFlights.delete('Rus');
console.log(setFlights);
// setFlights.clear();

// console.log(setFlights);

for(const flight of setFlights){
  console.log(flight);
}

console.log([...setFlights]);

