'use strict';

fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then(({ products }) => {
    return fetch('https://dummyjson.com/products/' + products[0].id);
  })
  .then(res => res.json())
  .then(data => console.log(data));
