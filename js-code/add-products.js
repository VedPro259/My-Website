import { list } from "./list.js";
import { leave } from "./add-to-cart.js"

const beatContainer = document.querySelector('.js-search-and-music');
let count = 0; 
const searchInput = document.getElementById('js-search-input'); 


list.forEach((item) => {
  if (item.sample === true) {
    beatContainer.innerHTML +=  `
    <div class="div-name music-${count}" data-product-id="${item.name}">
      <div class="one-beat">
        <div class="add-on-container">
          <div class="tooltip-activate">
            <img data-product-id="${item.name}" class="add-to-cart" src="images/the-pixel-cart.png">
            <div class="tooltip">Add to Cart</div>
          </div>
        </div>
        <div class="youtube-video-container">
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
    beatContainer.innerHTML += `
    <div class="div-name music-${count}" data-product-id="${item.name}">
      <div class="one-beat">
        <div class="add-on-container">
          <div class="tooltip-activate">
            <img data-product-id="${item.name}" class="add-to-cart" src="images/the-pixel-cart.png">
            <div class="tooltip">Add to Cart</div>
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

beatContainer.innerHTML += `
<div class="div-name music" data-product-id="PIANO FOLKS">
  <div class="one-beat">
    <div class="add-on-container">
      <div class="tooltip-activate">
        <img data-product-id="PIANO FOLKS" class="add-to-cart" src="images/the-pixel-cart.png">
        <div class="tooltip">Add to Cart</div>
      </div>
    </div>
    <div class="youtube-video-container">
      <iframe class="youtube-video" width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1560613432&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
    </div>
    <div class="audio-information">
      <p class="beat-name">"PIANO FOLKS"</p>
      <p class="this-beat-contains">This beat contains a <a class="sample" target="_blank" href="https://medium.com/@georgepowell_48987/since-the-dawn-of-the-sampling-era-theres-been-endless-debate-about-the-validity-of-music-f3559f2411fa">sample</a></p>
    </div>
  </div>
</div>`;

// Function to perform the search and hide divs that don't match the query
function performSearch(query) {
    const divs = beatContainer.querySelectorAll('.div-name');

    divs.forEach((div) => {
        const text = div.dataset.productId.toLowerCase(); 
        if (text.includes(query.toLowerCase())) {
            // Show the div if it contains the query
            div.style.display = 'block';
        } else {
            // Hide the div if it does not contain the query
            div.style.display = 'none';
        }
    });
}
// Event listener for the Enter key in the input field
searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        const query = searchInput.value;
        performSearch(query);
    }
});

leave();




//1. when click on cart, get the dataset name
//2. go through the list and find which one has same item.name
//3. put all the matching product info in a cart 
    

