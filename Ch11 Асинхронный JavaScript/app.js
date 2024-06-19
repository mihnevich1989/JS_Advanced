'use strict';

function req(id) {
  const request = new XMLHttpRequest();

  request.open('GET', 'https://dummyjson.com/products/' + id);
  request.send();

  request.addEventListener('load', function () {
    console.log(JSON.parse(this.responseText));
  });
}

req(1);
req(2);
req(3);


console.log('end');
