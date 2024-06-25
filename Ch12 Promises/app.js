'use strict';
const selectElem = document.querySelector('select[name="products"]');


fetch('https://dummyjson.com/products')
  .then(res => {
    if (!res.ok) {
      throw new Error(`Is error: ${res.status}`);
    }
    return res.json();
  })
  .then(({ products }) => {
    return fetch('https://dummyjson.com/products/' + products[0].id);
  })
  .then(res => {
    if (!res.ok) {
      throw new Error(`Is error: ${res.status}`);
    }
    return res.json();
  })
  .then(data => {
    console.log(data);
    const el = document.querySelector('.selectElement');
    el.innerHTML = data.description;
  })
  .catch(err => {
    const el = document.querySelector('.selectElement');
    el.innerHTML = err.message;
  });
