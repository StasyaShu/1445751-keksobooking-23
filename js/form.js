import {ROOMS_FOR_GUESTS_MAP, APARTMENT_TYPES} from './data.js';

const adForm = document.querySelector('.ad-form');
const filtersForm = document.querySelector('.map__filters');
const price = adForm.querySelector('#price');
const timeOut = adForm.querySelector('#timeout');

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

const setMinPrice = (evt) => {
  const minPrice = APARTMENT_TYPES[evt.target.value].minPrice;
  price.min = minPrice;
  price.placeholder = minPrice.toString();
};

adForm.type.addEventListener('change', setMinPrice);

const setCheckTime = (evt) => {
  timeOut.value = evt.target.value;
};

adForm.timein.addEventListener('change', setCheckTime);

export {togglePageActiveState};
