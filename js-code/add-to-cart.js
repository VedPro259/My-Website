import { list } from "./list.js"

export function leave() {
  let matchingProduct = JSON.parse(localStorage.getItem('matchingProduct')) || []; 
  
  document.querySelectorAll('.add-to-cart').forEach((div) => {
    div.addEventListener('click', () => {
      let toggle = false; 
      const name = div.dataset.productId; 
      list.forEach((values) => {
        if (values.name === name) {
          matchingProduct.forEach((duplicate) => {
            if (duplicate.name === name) {
              return toggle = true; 
            }})
          if (toggle === false) {
            matchingProduct.push(values);
            console.log(matchingProduct);
            localStorage.setItem('matchingProduct', JSON.stringify(matchingProduct));
          }
        }
      })
      document.querySelector('.text-cart')
        .innerHTML = `Cart (${matchingProduct.length})`;  
    })
  })
  return matchingProduct; 
};
