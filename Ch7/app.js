'use strict';

const Book = function (title, author) {
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
