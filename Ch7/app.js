'use strict';

/* const Book = function (title, author) {
  this.title = title;
  this.author = author;
  this.isRead = false;
};

Book.prototype.toggleRead = function () {
  this.isRead = !this.isRead;
};
Book.prototype.cover = "Paper";

const book1 = new Book('The Hobbit', 'J.R.R. Tolkien');


console.log(book1);
book1.toggleRead();
console.log(book1);

console.log(book1.cover);
console.log(book1.hasOwnProperty('cover'));
console.log(book1.hasOwnProperty('author'));

console.log(book1.__proto__ === Book.prototype);

console.log(Book.prototype.isPrototypeOf(book1));
 */

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
