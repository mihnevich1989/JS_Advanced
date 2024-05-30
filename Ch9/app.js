'use strict';

const Book = function (title, author) {
  this.title = title;
  this.author = author;
};

Book.prototype.getDescription = function () {
  console.log(`${this.title} was written by ${this.author}.`);;
};

const AudioBook = function (title, author, runtime) {
  Book.call(this, title, author);
  this.runtime = runtime;
};

AudioBook.prototype = Object.create(Book.prototype);
AudioBook.prototype.constructor = AudioBook;
AudioBook.prototype.log = function () {
  console.log(`runtime of ${this.title} book is ${this.runtime}`);
};

const book = new AudioBook('LOTR', 'Tolkien', 20 * 60);

book.log();
book.getDescription();

console.log(book);

console.log(book instanceof AudioBook);
console.log(book instanceof Book);
