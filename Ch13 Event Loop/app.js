'use strict';

let xhr = new XMLHttpRequest();

function myFetch(URL) {
  return new Promise((resolve, reject) => {
    xhr.open('GET', URL);
    xhr.responseType = 'json';
    xhr.send();

    xhr.addEventListener('load', function () {
      this.status >= 400 ? reject(new Error(this.status)) : resolve(xhr.response);
    });
    xhr.addEventListener('error', function () {
      reject(new Error(this.status));
    });
    xhr.addEventListener('timeout', function () {
      reject(new Error('Timeout'));
    });
  });
}

myFetch('https://dummyjson.com/productss')
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });
