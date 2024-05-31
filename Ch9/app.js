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
const book1 = new Book('LOTR', 'Tolkien');

book1.getDescription();

class EBook extends Book {
  constructor(title, author, pages) {
    super(title, author);
    this.pages = pages;
  }

  getDescription = function () {
    console.log(`${this.title} was written by ${this.author}. Pages: ${this.pages}`);;
  };
}

const book2 = new EBook('LOTR', 'Tolkien', 1000);
book2.getDescription();
