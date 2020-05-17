import { fetchData } from './fetchData/fetchData';
const carousel = document.querySelector(".carousel");
const content = document.querySelector(".carousel__content");
const next = document.querySelector(".carousel__button--next");
const prev = document.querySelector(".carousel__button--prev");
const loader = carousel.querySelector('.loader');
const loaderText = carousel.querySelector('.loader__text');

const gap = parseInt(getComputedStyle(content).gridColumnGap.slice(0, -2));
let itemWidth;

const createCarusel = (data) => {
  for (let element of data.cards) {
    const item = document.createElement('div');
    item.classList.add('carousel__item');
    item.innerHTML = 
    `
      <img class="carousel__img" src=${element.image} alt=${element.value} ${element.suit}/>
      <div class="carousel__info-cnt">
        <p class="carousel__info">${element.value} ${element.suit}</p>
        <p class="carousel__info">$50 - $60</p>
      </div> 
    `
    content.appendChild(item);
    itemWidth = item.offsetWidth;
  }
  loader.classList.add('invisible');
  next.style.display = "flex";
}
  
const handleCarousel = () => {
  let contentWidth = carousel.offsetWidth;
  let width = (Math.floor(contentWidth/(itemWidth + gap)))*(itemWidth + gap);

  next.addEventListener("click", () => {
    carousel.scrollBy(width, 0);
    if (carousel.scrollWidth !== 0) {
      prev.style.display = "flex";
    }
    if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
      next.style.display = "none";
    }
  });

  prev.addEventListener("click", () => {
    carousel.scrollBy(-(width), 0);
    if (carousel.scrollLeft - width <= 0) {
      prev.style.display = "none";
    }
    if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
      next.style.display = "flex";
    }
  });
};

const errorHandler = () => {
  loaderText.innerText = "Sorry, something goes wrong...";
}
  
window.addEventListener("resize", () => {
  carousel.scrollLeft = 0;
  prev.style.display = "none";
  handleCarousel();
});

const launchCarousel = (count) => {
  fetchData(count)
    .then(data => {
      if (!data.error) {
        createCarusel(data);
        handleCarousel();
      } else {
        errorHandler();
      }
    });
};

export { launchCarousel };
