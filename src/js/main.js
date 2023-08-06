// Load Styles
import '../scss/main.scss';

// Load Bootstrap init
import {initBootstrap} from "./bootstrap.js";

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

