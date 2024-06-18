'use strict';
const prod1 = { id: 1, name: 'Bread', count: 1 };
const prod2 = { id: 3, name: 'Meat', count: 3 };

const Cart = function () {
  this.products = [];
};

Cart.prototype.addProduct = function (product) {
  if (this.products.find(prd => prd.id === product.id)) {
    return;
  }
  this.products.push(product);
};

Cart.prototype.increaseAmount = function (id) {
  this.products = this.products.map(product => {
    if (product.id == id) {
      product.count++;
      return product;
    }
    return product;
  });
};

Cart.prototype.decreaseAmount = function (id) {
  this.products = this.products.map(product => {
    if (product.id = id) {
      product.count--;
      return product;
    }
    return product;
  }).filter(product => product.count > 0);
};

const cart = new Cart();
const cart2 = new Cart();
cart.addProduct(prod1);
cart2.addProduct(prod2);

console.log(cart);
cart.decreaseAmount(1);
console.log(cart);
console.log(cart2);
