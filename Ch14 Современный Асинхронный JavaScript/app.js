'use strict';

async function getProducts() {
  try {
    const resProducts = await fetch('https://dummyjson.com/products');
    if (!resProducts.ok) {
      throw new Error(resProducts.status);
    }
    const { products } = await resProducts.json();
    console.log(products);
    const resProduct = await fetch('https://dummyjson.com/product/' + products[0].id);
    const product = await resProduct.json();
    console.log(product);
  } catch (error) {
    console.log(error);
  } finally {
    console.log('Finally');
  }
}

getProducts();
