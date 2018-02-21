'use strict';

var promoSlider = document.querySelector('.slider-promo');

if (promoSlider) {
  var promoSliderBreadcrumb = promoSlider.querySelectorAll('.slider-promo__breadcrumb-item');
  var promoSliderSlides = promoSlider.querySelectorAll('.slider-promo__slide');
  var promoSliderPrevious = promoSlider.querySelector('.slider-promo__arrow--left');
  var promoSliderNext = promoSlider.querySelector('.slider-promo__arrow--right');
  var promoSliderActive;
  var promoSliderActiveIndex;
  var promoSliderBreadcrumbActive;
  var promoSliderBreadcrumbIndex;


  for (var i = 0; i < promoSliderBreadcrumb.length; i++) {
    promoSliderBreadcrumb[i].addEventListener('click', function (event) {
      for (var j = 0; j < promoSliderBreadcrumb.length; j++) {
        promoSliderBreadcrumb[j].removeAttribute('disabled');
        promoSliderSlides[j].classList.remove('slider-promo__slide--active');
      }
      promoSliderBreadcrumbIndex = Array.prototype.indexOf.call(
          event.currentTarget.parentElement.children, event.currentTarget
      );
      event.currentTarget.setAttribute('disabled', 'disabled');
      promoSliderSlides[promoSliderBreadcrumbIndex].classList.add('slider-promo__slide--active');

      promoSliderPrevious.removeAttribute('disabled');
      promoSliderNext.removeAttribute('disabled');
      if (promoSliderBreadcrumbIndex === 0) {
        promoSliderPrevious.setAttribute('disabled', 'disabled');
      }
      if (promoSliderBreadcrumbIndex === promoSliderSlides.length - 1) {
        promoSliderNext.setAttribute('disabled', 'disabled');
      }
    });
  }

  promoSliderPrevious.addEventListener('click', function () {
    promoSliderActive = promoSlider.querySelector('.slider-promo__slide--active');
    promoSliderBreadcrumbActive = promoSlider.querySelector('.slider-promo__breadcrumb-item[disabled]');
    promoSliderActiveIndex = Array.prototype.indexOf.call(promoSliderSlides, promoSliderActive);
    promoSliderNext.removeAttribute('disabled');
    if (promoSliderActiveIndex > 0) {
      promoSliderActive.classList.remove('slider-promo__slide--active');
      promoSliderSlides[promoSliderActiveIndex - 1].classList.add('slider-promo__slide--active');
      promoSliderBreadcrumbActive.removeAttribute('disabled');
      promoSliderBreadcrumb[promoSliderActiveIndex - 1].setAttribute('disabled', 'disabled');
    }
    if (promoSliderActiveIndex === 1) {
      promoSliderPrevious.setAttribute('disabled', 'disabled');
    }
  });
  promoSliderNext.addEventListener('click', function () {
    promoSliderActive = promoSlider.querySelector('.slider-promo__slide--active');
    promoSliderBreadcrumbActive = promoSlider.querySelector('.slider-promo__breadcrumb-item[disabled]');
    promoSliderActiveIndex = Array.prototype.indexOf.call(promoSliderSlides, promoSliderActive);
    promoSliderPrevious.removeAttribute('disabled');
    if (promoSliderActiveIndex < promoSliderSlides.length - 1) {
      promoSliderActive.classList.remove('slider-promo__slide--active');
      promoSliderSlides[promoSliderActiveIndex + 1].classList.add('slider-promo__slide--active');
      promoSliderBreadcrumbActive.removeAttribute('disabled');
      promoSliderBreadcrumb[promoSliderActiveIndex + 1].setAttribute('disabled', 'disabled');
    }
    if (promoSliderActiveIndex === promoSliderSlides.length - 2) {
      promoSliderNext.setAttribute('disabled', 'disabled');
    }
  });

}
