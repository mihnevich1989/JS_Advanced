'use strict';
const selectElem = document.querySelector('select[name="products"]');

function createSelect(arrayOptions) {
  const el = document.querySelector('.selectElement');
  el.innerHTML = `<select>
    ${arrayOptions.map(arrEl => `<option value=${arrEl.slug}>${arrEl.name}</option>`).join('')}
  </select>`;
}

function getCategoruest() {
  fetch('https://dummyjson.com/products/categories')
    .then(res => res.json())
    .then(data => createSelect(data))
    .catch(err => console.log(err))
    .finally(() => console.log('Finally'));
}

getCategoruest()
