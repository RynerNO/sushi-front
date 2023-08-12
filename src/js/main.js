// Load Styles
import '../scss/main.scss';

// Load Bootstrap init
import {initBootstrap} from "./bootstrap.js";

// import Swiper JS
import Swiper from 'swiper';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
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


// logo image change for small devices
if(window && window.innerWidth <= 828) {
  const logoImg = document.querySelector('#logoImg');
  logoImg.src = "/images/logo/logtip.png"
}


// Slider with promotions
const promotionsSwiper = new Swiper('#main-slider', {
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

// Slider with popular items

const popularSwiper = new Swiper('#popular-slider', {
  modules: [Navigation],
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 3,
  loop: true,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    800: {
      slidesPerView: 3,
      spaceBetween: 20
    },
  }
});



// CART

const cartItems = document.querySelectorAll('.cart-item')
// TODO: Calculed when product is added
let totalPrice = 200;
let totalQuantity = cartItems.length;

for(const item of cartItems) {
  // TODO: Get Price from back-end and calculate
  const price = parseInt(item.getAttribute('price'));
  const priceEl = item.querySelector('.price')
  item.querySelector('.minus-button').addEventListener('click', () => {
   let quantity = item.querySelector('.quantity').innerText
    quantity = parseInt(quantity) || 1
    let oldPrice = calcPrice(price, quantity)
    console.log(oldPrice)
    if(quantity === 1) return;
    quantity -= 1
    
    
    const newPrice = calcPrice(price, quantity)
    // Change summary
    totalQuantity -=1
    totalPrice = totalPrice - oldPrice + newPrice

    priceEl.innerText = `${newPrice}p`
    item.querySelector('.quantity').innerText = quantity
    summaryPriceUpdate()
  })


  item.querySelector('.plus-button').addEventListener('click', () => {
    let quantity = item.querySelector('.quantity').innerText
     quantity = parseInt(quantity) || 1
     let oldPrice = calcPrice(price, quantity)
     quantity += 1
     item.querySelector('.quantity').innerText = quantity
     
    const newPrice = calcPrice(price, quantity)
     // Change summary
    totalQuantity +=1
    totalPrice = totalPrice - oldPrice + newPrice
    priceEl.innerText = `${newPrice}p`
    summaryPriceUpdate()
   })


   item.querySelector('.delete-button').addEventListener('click', () => {
    let quantity = item.querySelector('.quantity').innerText
     quantity = parseInt(quantity) || 1
    const newPrice = calcPrice(price, quantity)
    totalQuantity -= quantity
    totalPrice = totalPrice - newPrice
    item.parentNode.remove()
    summaryPriceUpdate()
   })
   
}
// TODO: Get Price from back-end and calculate
function calcPrice(price, quantity) {
  return price * quantity
}

function summaryPriceUpdate() {
  const totalEl = document.querySelector('#cart-total')
  totalEl.innerText = `Корзина: ${totalQuantity} (${totalPrice} руб)`
  
}
summaryPriceUpdate()