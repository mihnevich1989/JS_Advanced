'use strict';

async function getAllProducts() {
  const response = await fetch('https://dummyjson.com/products');
  return response.json();
}

async function getProductsById(id) {
  const response = await fetch('https://dummyjson.com/products/' + id);
  return response.json();
}

async function main() {
  const { products } = await getAllProducts();
  const res = await Promise.all(products.map(product => getProductsById(product.id)));

  console.log(res);

  /* for (const product of products) {
    const resp = await getProductsById(product.id);
    console.log(resp);
  } */

}

main();
