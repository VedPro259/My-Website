import { leave } from "./add-to-cart.js"
document.querySelector('.text-cart')
  .innerHTML = `Cart (${leave().length})`;  
