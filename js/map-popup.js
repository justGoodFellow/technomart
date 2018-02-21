'use strict';

var mapOpen = document.querySelector('.info__contacts-map');
var map = document.querySelector('.map');
var mapClose = map.querySelector('.map__close');
var overlay = document.querySelector('.modal__overlay');

mapOpen.addEventListener('click', function (event) {
  event.preventDefault();
  map.classList.add('map--show');
  overlay.classList.add('modal__overlay--show');
});

mapClose.addEventListener('click', function () {
  map.classList.remove('map--show');
  overlay.classList.remove('modal__overlay--show');
});

window.addEventListener('keydown', function (event) {
  if (event.keyCode === 27) {
    if (map.classList.contains('map--show')) {
      map.classList.remove('map--show');
    }
    if (overlay.classList.contains('modal__overlay--show')) {
      overlay.classList.remove('modal__overlay--show');
    }
  }
});
