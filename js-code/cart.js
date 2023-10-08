import { leave } from "./add-to-cart.js"

export function bye() { 
  const newContainer = document.querySelector('.js-cart-items');
  let count = 0; 
  leave().forEach((item) => {
    if (item.sample === true) {
      newContainer.innerHTML +=  `
      <div class="div-name music-${count}" data-product-id="${item.name}">
        <div class="one-beat">
          <div class="add-on-container">
            <div class="tooltip-activate">
              <img data-product-id="${item.name}" class="remove-from-cart" src="images/red_error_circle.png">
              <div class="tooltip">Remove from Cart</div>
            </div>
          </div>
          <div style=""class="youtube-video-container">
            <iframe loading="lazy" class="youtube-video" src="${item.source}"></iframe>
          </div>
          <div class="audio-information">
            <p class="beat-name">"${item.name}"</p>
            <p class="this-beat-contains">This beat contains a <a class="sample" target="_blank" href="https://medium.com/@georgepowell_48987/since-the-dawn-of-the-sampling-era-theres-been-endless-debate-about-the-validity-of-music-f3559f2411fa">sample</a></p>
          </div>
        </div>
      </div>`; 
      count++; 
      
    } else if (item.sample === false) {
      newContainer.innerHTML += `
      <div class="div-name music-${count}" data-product-id="${item.name}">
        <div class="one-beat">
          <div class="add-on-container">
            <div class="tooltip-activate">
              <img data-product-id="${item.name}" class="remove-from-cart" src="images/red_error_circle.png">
              <div class="tooltip">Remove to Cart</div>
            </div>
          </div>
          <div class="youtube-video-container">
            <iframe loading="lazy" class="youtube-video" src="${item.source}"></iframe>
          </div>
          <div class="audio-information">
            <p class="beat-name">"${item.name}"</p>
            <p class="this-beat-contains">This beat does not contain a <a class="sample" target="_blank" href="https://medium.com/@georgepowell_48987/since-the-dawn-of-the-sampling-era-theres-been-endless-debate-about-the-validity-of-music-f3559f2411fa">sample</a></p>
          </div>
        </div>
      </div>
      `;
      count++; 
    };
  });

  document.querySelector('.beat-count')
    .innerHTML = `Quantity (${leave().length})`;



  document.querySelectorAll('.remove-from-cart')
    .forEach((value) => {
      value.addEventListener('click', () => {
        const name = value.dataset.productId;
        document.querySelectorAll('.div-name')
          .forEach((box) => {
            if (name === box.dataset.productId) {
              box.remove();
            }
          }) 
        localStorage.setItem('matchingProduct', JSON.stringify(leave().filter((item) => {
          if (name !== item.name) {
            return true; 
          } else {
            return false; 
          }
        })));

        document.querySelector('.beat-count')
          .innerHTML = `Quantity (${JSON.parse(localStorage.getItem('matchingProduct')).length})`;
        
        document.querySelector('.text-cart')
          .innerHTML = `Cart (${JSON.parse(localStorage.getItem('matchingProduct')).length})`
      })
    })
};

bye();


//find a way to make hi = matchingProduct
//when it is, then we can add or subtract certain products and redo the whole process
