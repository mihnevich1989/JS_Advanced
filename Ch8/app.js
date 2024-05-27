'use strict';

class Book {
  isRead = false;

  constructor(author, title) {
    this.author = author;
    this.title = title;
  }

  toogleRead() {
    this.isRead = !this.isRead;
  }

}

const lotr = new Book('R.R. Tolkien', 'Lord of the ring');

console.log(lotr);
console.log(lotr instanceof Book);
console.log(lotr.__proto__);
