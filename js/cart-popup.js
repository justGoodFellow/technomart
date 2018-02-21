'use strict';

var cartPopup = document.querySelector('.cart-popup');

if (cartPopup) {
  var cartPopupClose = cartPopup.querySelector('.cart-popup__close');
  var buyBtns = document.querySelectorAll('.product__buy');
  var overlay = document.querySelector('.modal__overlay');

  for (var i = 0; i < buyBtns.length; i++) {
    buyBtns[i].addEventListener('click', function (event) {
      event.preventDefault();
      cartPopup.classList.add('cart-popup--show');
      overlay.classList.add('modal__overlay--show');
    });
  }

  cartPopupClose.addEventListener('click', function () {
    cartPopup.classList.remove('cart-popup--show');
    cartPopup.classList.remove('cart-popup--error');
    overlay.classList.remove('modal__overlay--show');
  });

  window.addEventListener('keydown', function (event) {
    if (event.keyCode === 27) {
      if (cartPopup.classList.contains('cart-popup--show')) {
        cartPopup.classList.remove('cart-popup--show');
        cartPopup.classList.remove('cart-popup--error');
      }
      if (overlay.classList.contains('modal__overlay--show')) {
        overlay.classList.remove('modal__overlay--show');
      }
    }
  });
}
