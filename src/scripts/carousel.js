const carousel = document.querySelector(".carousel");
const content = document.querySelector(".carousel__content");
const item = document.querySelector(".carousel__item");
const next = document.querySelector(".carousel__button--next");
const prev = document.querySelector(".carousel__button--prev");

const gap = parseInt(getComputedStyle(content).gridColumnGap.slice(0, -2));

const handleCarousel = () => {
  let contentWidth = carousel.offsetWidth;
  let itemWidth = item.offsetWidth;
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

handleCarousel();

window.addEventListener("resize", () => {
  carousel.scrollLeft = 0;
  prev.style.display = "none";
  handleCarousel();
});
