// Import styles
import './styles/style.scss'

// Import scripts
import './scripts/carousel';
import './scripts/img_import';
import { scrollToTop, addProducts, getCurrentTime, hamburgerActions } from './scripts/mainModule';

// Import functions
//import hamburgerFunction from './scripts/hamburger';

document.addEventListener("DOMContentLoaded", (e) => {
    hamburgerActions();
    scrollToTop();
    addProducts(4);
    getCurrentTime();
});

