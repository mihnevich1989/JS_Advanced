'use strict';
const selectElem = document.querySelector('select[name="products"]');

function getData(url, errorMessage) {
  return fetch(url)
    .then(res => {
      if (!res.ok) {
        throw new Error(`${errorMessage}: ${res.status}`);
      }
      return res.json();
    });
}

getData('https://dummyjson.com/products', 'Not found products')
  .then(({ products }) => {
    return getData('https://dummyjson.com/products/' + products[0].id, 'Not found product');
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
