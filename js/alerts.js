import {adForm, filtersForm} from './data.js';
import {setDefaultAddress} from './map.js';
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const ALERT_SHOW_TIME = 5000;
const body = document.querySelector('body');

// Функция ошибки отправки формы
const onSubmitError = () => {
  const submitErrorMessage = errorTemplate.cloneNode(true);
  body.append(submitErrorMessage);
};

// Функция в случае успешной отправки формы и сброса данных к первоначальному состоянию
const onSubmitSuccess = () => {
  const submitSuccessMessage = successTemplate.cloneNode(true);
  adForm.reset();
  filtersForm.reset();
  setDefaultAddress();
  body.append(submitSuccessMessage);
};

// Функция показа ошибки при получении данных с сервера - произвольный дизайн
const onGetDataError = () => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  alertContainer.textContent = 'Ошибка при загрузке данных';
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {onSubmitError, onSubmitSuccess, onGetDataError};
