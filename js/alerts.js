import {reset} from './map.js';
import {filtersForm} from './data.js';
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const loadError = document.querySelector('.load-error');
const ALERT_SHOW_TIME = 5000;
const submitSuccessMessage = successTemplate.cloneNode(true);
const submitErrorMessage = errorTemplate.cloneNode(true);

const documentClickHandler = () => {
  closeSubmitSuccess();
};

const documentKeydownHandler = (evt) => {
  if (evt.keyCode === 27) {
    closeSubmitSuccess();
  }
};

const errorButtonClickHandler = () => {
  closeSubmitError();
  reset();
};

function onSubmitError () {
  document.body.append(submitErrorMessage);
  document.addEventListener('click', errorButtonClickHandler);
}

function closeSubmitError () {
  submitErrorMessage.remove();
  document.removeEventListener('click', errorButtonClickHandler);
}

function onSubmitSuccess () {
  document.body.append(submitSuccessMessage);
  reset();
  document.addEventListener('keydown', documentKeydownHandler);
  document.addEventListener('click', documentClickHandler);
}

function closeSubmitSuccess () {
  submitSuccessMessage.remove();
  document.removeEventListener('keydown', documentKeydownHandler);
  document.removeEventListener('click', documentClickHandler);
}

const onGetDataError = () => {
  loadError.classList.add('load-error__active');
  setTimeout(() => {
    loadError.remove();
  }, ALERT_SHOW_TIME);
  filtersForm.classList.add('map__filters--disabled');
};

export {onSubmitError, onSubmitSuccess, onGetDataError};
