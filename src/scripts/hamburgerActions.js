export default function() {
  const button = document.querySelector('.navigation__button');
  const navigation = document.querySelector('.navigation__cnt');

  button.addEventListener('click', (e) => {
    navigation.classList.toggle('navigation__cnt--active');
  });
};
