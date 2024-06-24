'use strict';

fetch('https://dummyjson.com/productss')
  .then(res => res.json())
  .then(({ products }) => {
    return fetch('https://dummyjson.com/products/' + products[0].id);
  })
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err))
