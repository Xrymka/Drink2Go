let nojsElements = document.querySelectorAll('.nojs');
let header = document.querySelector('.header');
let headerNav = header.querySelector('.header__nav');
let burger = header.querySelector('.burger');
let choiceSorting = document.querySelector('.catalog__select');
let catalogSorting = document.querySelector('.catalog__sorting');

/* remove styles without js */
nojsElements.forEach(element => {
  element.classList.remove('nojs');
});

/* burger */
burger.addEventListener('click', function() {
  if (!headerNav.classList.contains('nav--open')) {
    headerNav.classList.add('nav--open');
    burger.classList.add('burger--open');
  } else {
    headerNav.classList.remove('nav--open');
    burger.classList.remove('burger--open');
  }
});

/*slider (swiper)*/
const mySwiper = new Swiper('.slider__swiper', {
  // Optional parameters
  loop: true,

  navigation: {
    nextEl: '.slider__button-prev',
    prevEl: '.slider__button-next',
  },

  pagination: {
    el: '.slider__pagination',
    clickable: true,
  },

  autoHeight: true,
});

/* select */
choiceSorting.addEventListener('click', function() {
  if (!choiceSorting.classList.contains('catalog__select--open')) {
    choiceSorting.classList.add('catalog__select--open');
    catalogSorting.classList.add('catalog__sorting--open');
  } else {
    choiceSorting.classList.remove('catalog__select--open');
    catalogSorting.classList.remove('catalog__sorting--open');
  }
});

/* map */
const map = L.map('map', { zoomControl: false });

map.setView({
  lat: 59.968424,
  lng: 30.317560,
}, 17);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'img/map-pin.svg',
  iconSize: [38, 50],
  iconAnchor: [0, 50],
});

const mainPinMarker = L.marker(
  {
    lat: 59.968322,
    lng: 30.317359,
  },
  {
    icon: mainPinIcon,
  }
);

mainPinMarker.addTo(map);
