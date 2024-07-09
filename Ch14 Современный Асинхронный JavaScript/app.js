'use strict';

async function getProducts() {
  const resProducts = await fetch('https://dummyjson.com/products');
  const { products } = await resProducts.json();
  console.log(products);

  const resProduct = await fetch('https://dummyjson.com/product/' + products[0].id);
  const product = await resProduct.json();
  console.log(product);
}

getProducts()
