'use strict';

class Car {
  #vin = 12345678;
  speed;

  #changeVin() {
    console.log('changed');
  }

  test() {
    this.#changeVin();
  }

  static #field = 1;
};

const newCar = new Car();

newCar.test()
