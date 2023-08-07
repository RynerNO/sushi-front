// Load Styles
import '../scss/main.scss';

// Load Bootstrap init
import {initBootstrap} from "./bootstrap.js";

// import Swiper JS
import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';
// Loading bootstrap with optional features
initBootstrap({
  tooltip: true,
  popover: true,
  toasts: true,
});

const navMenu = document.querySelector('.nav-menu');

const mobileMenuBtn = document.querySelector('#mobileMenu')
let navMenuTimeoutId = null
mobileMenuBtn.addEventListener('click', () => {
  if(navMenuTimeoutId !== null) clearTimeout(navMenuTimeoutId)
  navMenu.classList.toggle('nav-menu_visible')
  if(navMenu.classList.contains('nav-menu_visible')) {
    navMenuTimeoutId = setTimeout(() => {
      navMenu.style.height = "auto"
    }, 300)
  } else navMenu.style.height = "0px"
})

if(window && window.innerWidth <= 828) {
  const logoImg = document.querySelector('#logoImg');
  logoImg.src = "/images/logo/logtip.png"
}

const swiper = new Swiper('#main-slider', {
  modules: [Pagination, Autoplay],
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true, // Allow clicking on pagination dots
},
});