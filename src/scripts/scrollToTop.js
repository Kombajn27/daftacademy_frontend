export default function() {
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
