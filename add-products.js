import { list } from "./list.js";
const beatContainer = document.querySelector('.js-search-and-music');

list.forEach((item) => {
  if (item.sample === true) {
    beatContainer.innerHTML +=  `
    <div class="music">
      <div class="one-beat">
        <div class="add-on-container">
          <div class="tooltip-activate">
            <img class="add-to-cart" src="images/the-pixel-cart.png">
            <div class="tooltip">Add to Cart</div>
          </div>
        </div>
        <div class="youtube-video-container">
          <iframe loading="lazy" class="youtube-video" src="${item.source}" title="saba x lofi type beat - &quot;rolling&quot;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div class="audio-information">
          <p class="beat-name">"${item.name}"</p>
          <p class="this-beat-contains">This beat contains a <a class="sample" target="_blank" href="https://medium.com/@georgepowell_48987/since-the-dawn-of-the-sampling-era-theres-been-endless-debate-about-the-validity-of-music-f3559f2411fa">sample</a></p>
        </div>
      </div>
    </div>`;
  } else if (item.sample === false) {
    beatContainer.innerHTML += `
    <div class="music">
      <div class="one-beat">
        <div class="add-on-container">
          <div class="tooltip-activate">
            <img class="add-to-cart" src="images/the-pixel-cart.png">
            <div class="tooltip">Add to Cart</div>
          </div>
        </div>
        <div class="youtube-video-container">
          <iframe loading="lazy" class="youtube-video" src="${item.source}" title="saba x lofi type beat - &quot;rolling&quot;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div class="audio-information">
          <p class="beat-name">"${item.name}"</p>
          <p class="this-beat-contains">This beat does not contain a <a class="sample" target="_blank" href="https://medium.com/@georgepowell_48987/since-the-dawn-of-the-sampling-era-theres-been-endless-debate-about-the-validity-of-music-f3559f2411fa">sample</a></p>
        </div>
      </div>
    </div>
    `;
  };
});

beatContainer.innerHTML += `
<div class="music">
  <div class="one-beat">
    <div class="add-on-container">
      <div class="tooltip-activate">
        <img class="add-to-cart" src="images/the-pixel-cart.png">
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

