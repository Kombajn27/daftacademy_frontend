const scrollToTop = function() {
  const scrollArrow = document.querySelector('.scroll-arrow');

  window.addEventListener('scroll', (e) => {
    let y_position = window.scrollY;
    let intViewportHeight = window.innerHeight;
    if (y_position > intViewportHeight/2) {
      scrollArrow.classList.add('scroll-arrow--visible');
    } else {
      scrollArrow.classList.remove('scroll-arrow--visible');
    }
  });

  scrollArrow.addEventListener('click', (e) => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  });
};

const addProducts = function(count) {
  let placeholderURL = 'https://via.placeholder.com/268x338';

  const addButton = document.querySelector('.arrivals__button');
  const productCnt = document.querySelector('.arrivals__content');

  addButton.addEventListener('click', (e) => {
    e.preventDefault;

    let newElement = document.createElement('div');
    newElement.classList.add('arrivals__item');

    let htmlToAdd = `
      <img class="arrivals__img" src=${placeholderURL}/>
      <div class="arrivals__info-cnt">
        <p class="arrivals__info arrivals__info--distinction"><img class="arrivals__icon" src="./assets/bolt.png" alt="bolt icon">NEW</p>
        <p class="arrivals__info arrivals__info">Some fancy outfit</p>
        <p class="arrivals__info arrivals__info--distinction">$300</p>
      </div>`;
    
    for (let i = 1; i <= count; i+=1) {
      let newElement = document.createElement('div');
      newElement.classList.add('arrivals__item');
      newElement.innerHTML = htmlToAdd; 
      productCnt.appendChild(newElement);
    }
  });
};

const getCurrentTime = function() {
  let date = new Date().getFullYear();
  const textCnt = document.querySelector('.footer__rights');

  textCnt.innerText = `©${date} Zonex All rights reserved`;
};

const hamburgerActions = function() {
  const button = document.querySelector('.navigation__button');
  const navigation = document.querySelector('.navigation__cnt');

  button.addEventListener('click', (e) => {
    navigation.classList.toggle('navigation__cnt--active');
  });
};

export { scrollToTop, addProducts, getCurrentTime, hamburgerActions };
