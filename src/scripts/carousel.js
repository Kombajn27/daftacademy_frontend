const carousel = document.querySelector(".carousel");
const content = document.querySelector(".carousel__content");
const item = document.querySelector(".carousel__item");
const next = document.querySelector(".carousel__button--next");
const prev = document.querySelector(".carousel__button--prev");

const gap = 30;
let contentWidth = carousel.offsetWidth;
let itemWidth = item.offsetWidth;
let width = (Math.floor(contentWidth/(itemWidth + gap)))*(itemWidth + gap);


next.addEventListener("click", e => {
  carousel.scrollBy(width, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});

prev.addEventListener("click", e => {
  carousel.scrollBy(-(width), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

window.addEventListener("resize", e => (width = carousel.offsetWidth));
