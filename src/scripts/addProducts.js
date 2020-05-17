import { fetchData } from './fetchData/fetchData';

const addButton = document.querySelector('.arrivals__button');
const productsSection = document.querySelector('.arrivals');
const productCnt = document.querySelector('.arrivals__content');
const loader = productsSection.querySelector('.loader');
const loaderText = productsSection.querySelector('.loader__text');
let deck_id = null;

const addProducts = (data) => {
  for (let element of data.cards ) {
    let htmlToAdd = `
    <img class="arrivals__img" src=${element.image} alt=${element.value} ${element.suit}/>
    <div class="arrivals__info-cnt">
      <p class="arrivals__info arrivals__info--distinction"><img class="arrivals__icon" src="./assets/bolt.png" alt="bolt icon">NEW</p>
      <p class="arrivals__info arrivals__info">${element.value} ${element.suit}</p>
      <p class="arrivals__info arrivals__info--distinction">$300</p>
    </div>`;

    let newElement = document.createElement('div');
    newElement.classList.add('arrivals__item');
    newElement.innerHTML = htmlToAdd; 
    productCnt.appendChild(newElement);
  }
  loader.classList.add('invisible');
}

const errorHandler = () => {
  loaderText.innerText = "Sorry, something goes wrong...";
  addButton.classList.add('arrivals__button--invisible')
}

addButton.addEventListener('click', (e) => {
  e.preventDefault;
  loader.classList.remove('invisible');

  fetchData(4, deck_id)
    .then(data => {
      if (!data.error) {
        addProducts(data);
        if (data.remaining < 4) {
          addButton.classList.add('arrivals__button--invisible');
        }
      } else {
        errorHandler();
      }
    });
})

const launchProducts = (count) => {
  fetchData(count)
    .then(data => {
      if (!data.error) {
        addProducts(data);
        deck_id = data.deck_id
      } else {
        errorHandler();
      }
    });
};

export { launchProducts };
  