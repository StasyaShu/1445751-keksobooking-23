import {adForm, filtersForm} from './data.js';
import {setDefaultAddress} from './map.js';
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const errorButton = errorTemplate.querySelector('.error__button');
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const loadError = document.querySelector('.load-error');
const ALERT_SHOW_TIME = 5000;

// Функция ошибки отправки формы
const onSubmitError = () => {
  const submitErrorMessage = errorTemplate.cloneNode(true);
  document.body.append(submitErrorMessage);
  errorButton.addEventListener('click', () => {
    submitErrorMessage.remove();
    adForm.reset();
    filtersForm.reset();
    setDefaultAddress();
  });
};

// Функция в случае успешной отправки формы и сброса данных к первоначальному состоянию
const onSubmitSuccess = () => {
  const submitSuccessMessage = successTemplate.cloneNode(true);
  document.body.append(submitSuccessMessage);
  adForm.reset();
  filtersForm.reset();
  setDefaultAddress();
  document.addEventListener('keydown', (evt) => {
    evt.preventDefault();
    if (evt.keyCode === 27) {
      submitSuccessMessage.remove();
    }
  });
  document.addEventListener('click', () => {
    submitSuccessMessage.remove();
  });
};

// Функция показа ошибки при получении данных с сервера - произвольный дизайн
const onGetDataError = () => {
  loadError.classList.add('load-error__active');

  setTimeout(() => {
    loadError.remove();
  }, ALERT_SHOW_TIME);
};

export {onSubmitError, onSubmitSuccess, onGetDataError};
