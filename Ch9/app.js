'use strict';

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
  getDescription = function () {
    console.log(`${this.title} was written by ${this.author}.`);;
  };
}

class AudioBook extends Book {
  constructor(title, author, runtime) {
    super(title, author);
    this.runtime = runtime;
  }

  log = function () {
    console.log(`runtime of ${this.title} book is ${this.runtime}`);
  };
}

const book = new AudioBook('LOTR', 'Tolkien', 20 * 60);

console.log(book);
book.getDescription();
book.log();
