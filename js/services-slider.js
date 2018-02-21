'use strict';

var servicesSlider = document.querySelector('.services__slider');

if (servicesSlider) {
  var serviceslSiderControls = servicesSlider.querySelectorAll('.services__control-btn');
  var servicesSliderSlides = servicesSlider.querySelectorAll('.services__slide');

  for (var i = 0; i < serviceslSiderControls.length; i++) {
    serviceslSiderControls[i].addEventListener('click', function (event) {
      for (var j = 0; j < serviceslSiderControls.length; j++) {
        serviceslSiderControls[j].removeAttribute('disabled');
        servicesSliderSlides[j].classList.remove('services__slide--active');
      }
      event.currentTarget.setAttribute('disabled', 'disabled');
      servicesSliderSlides[Array.prototype.indexOf.call(
          event.currentTarget.parentElement.children, event.currentTarget
      )].classList.add('services__slide--active');
    });
  }

}
