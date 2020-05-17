// Import styles
import './styles/style.scss'

// Import scripts
import './scripts/carousel';
import './scripts/img_import';
import getCurrentTime from './scripts/getCurrentTime';
import  { launchProducts } from './scripts/addProducts';
import scrollToTop from './scripts/scrollToTop';
import hamburgerActions from './scripts/hamburgerActions';
import { launchCarousel } from './scripts/carousel';
import { launchThemes } from './scripts/themes';

document.addEventListener("DOMContentLoaded", (e) => {
  hamburgerActions();
  launchCarousel(12);
  scrollToTop();
  launchProducts(8);
  launchThemes(4);
  getCurrentTime();
});
