import {ROOMS_FOR_GUESTS_MAP, APARTMENT_TYPES, adForm, filtersForm, URL_POST} from './data.js';
import {onSubmitError, onSubmitSuccess} from './alerts.js';
import {postData} from './backend.js';

const toggleDisabledOnFormNodes = (isDisabled) => {
  [adForm, filtersForm].forEach((form) => {
    for (const element of form.elements) {
      element.disabled = isDisabled;
    }
  });
};

const togglePageActiveState = (isDisabled) => {
  adForm.classList.toggle('ad-form--disabled', isDisabled);
  filtersForm.classList.toggle('map__filters--disabled', isDisabled);

  toggleDisabledOnFormNodes(isDisabled);
};

const validateRoomsInput = (evt) => {
  const capacityOptions = ROOMS_FOR_GUESTS_MAP[evt.target.value];
  for (const currentCapacityItem of adForm.capacity.children) {
    currentCapacityItem.disabled = !capacityOptions.includes(currentCapacityItem.value);
  }
  adForm.capacity.value = capacityOptions[0];
};

adForm.rooms.addEventListener('change', validateRoomsInput);

const validatePriceInput = (evt) => {
  const minPrice = APARTMENT_TYPES[evt.target.value].minPrice;
  adForm.price.min = minPrice;
  adForm.price.placeholder = minPrice;
};

adForm.type.addEventListener('change', validatePriceInput);

const validateTimeInInput = (evt) => {
  adForm.timeout.value = evt.target.value;
};

adForm.timein.addEventListener('change', validateTimeInInput);

const validateTimeOutInput = (evt) => {
  adForm.timein.value = evt.target.value;
};

adForm.timeout.addEventListener('change', validateTimeOutInput);

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  postData(URL_POST, new FormData(evt.target), onSubmitSuccess, onSubmitError);
});

export {togglePageActiveState};
