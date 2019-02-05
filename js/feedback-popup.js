'use strict';

var feedbackOpen = document.querySelector('.info__feedback-open');

if (feedbackOpen) {
  var feedback = document.querySelector('.feedback');
  var feedbackClose = feedback.querySelector('.feedback__close');
  var form = feedback.querySelector('.feedback__form');
  var feedbackName = feedback.querySelector('[name=name]');
  var feedbackEmail = feedback.querySelector('[name=email]');
  var feedbackText = feedback.querySelector('[name=text]');
  var storageName = localStorage.getItem('name');
  var storageEmail = localStorage.getItem('email');
  var overlay = document.querySelector('.modal__overlay');

  feedbackOpen.addEventListener('click', function (event) {
    event.preventDefault();
    feedback.classList.add('feedback--show');
    overlay.classList.add('modal__overlay--show');
    if (storageEmail && storageEmail) {
      feedbackName.value = storageName;
      feedbackEmail.value = storageEmail;
      feedbackText.focus();
    } else {
      feedbackName.focus();
    }
  });

  form.addEventListener('submit', function (event) {
    if (!feedbackName.value || !feedbackEmail.value || !feedbackText.value) {
      event.preventDefault();
      feedback.classList.add('feedback--error');
      feedbackName.setAttribute('required', 'required');
      feedbackEmail.setAttribute('required', 'required');
      feedbackText.setAttribute('required', 'required');
    } else {
      localStorage.setItem('name', feedbackName.value);
      localStorage.setItem('email', feedbackEmail.value);
    }
  });

  feedbackClose.addEventListener('click', function () {
    feedback.classList.remove('feedback--show');
    feedback.classList.remove('feedback--error');
    overlay.classList.remove('modal__overlay--show');
  });

  window.addEventListener('keydown', function (event) {
    if (event.keyCode === 27) {
      if (feedback.classList.contains('feedback--show')) {
        feedback.classList.remove('feedback--show');
        feedback.classList.remove('feedback--error');
      }
      if (overlay.classList.contains('modal__overlay--show')) {
        overlay.classList.remove('modal__overlay--show');
      }
    }
  });
}
