import { fetchData } from './fetchData/fetchData';

const themes = document.querySelector('.themes');
const themesCnt = themes.querySelector('.themes__cnt');
const sizeArray = ['themes__element--big', 'themes__element--normal', 'themes__element--normal', 'themes__element--long'];
const loader = themes.querySelector('.loader');
const loaderText = themes.querySelector('.loader__text');

const showThemes = (data) => {
  for (let i = 0; i < data.cards.length; i++) {
    let element = document.createElement('div');
    element.classList.add('themes__element');
    element.classList.add(sizeArray[i]);

    element.innerHTML = 
    `
    <img class="themes__img" src=${data.cards[i].image} alt=${data.cards[i].value} ${data.cards[i].suit}/>
    <div class="themes__info">
      <p class="themes__title">${data.cards[i].value} ${data.cards[i].suit}</p>
      <a class="themes__link" href="#">Shop now</a>
    </div>
    `;
    themesCnt.appendChild(element);
  }
  loader.classList.add('invisible');
};

const errorHandler = () => {
  loaderText.innerText = "Sorry, something goes wrong...";
};

const launchThemes = (count) => {
  fetchData(count)
    .then(data => {
      if (!data.error) {
        showThemes(data);
      } else {
        errorHandler();
      }
    });
};

export { launchThemes };
