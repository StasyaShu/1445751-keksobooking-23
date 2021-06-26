import {MIN_TITLE_LENGTH, MAX_TITLE_LENGTH} from './data.js';

const searchForm = document.querySelector('.ad-form');
const mapForm = document.querySelector('.map__filters');
const searchFormTitle = searchForm.querySelector('#title');
const roomsQty = searchForm.querySelector('#room_number');
const ROOMS_FOR_GUESTS_MAP = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0'],
};

const toggleDisabledOnFormNodes = (isDisabled) => {
  [searchForm, mapForm].forEach((form) => {
    for (const element of form.elements) {
      element.disabled = isDisabled;
    }
  });
};

const togglePageActiveState = (isDisabled) => {
  searchForm.classList.toggle('ad-form--disabled', isDisabled);
  mapForm.classList.toggle('map__filters--disabled', isDisabled);

  toggleDisabledOnFormNodes(isDisabled);
};

searchFormTitle.addEventListener('input', () => {
  const valueLength = searchFormTitle.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    searchFormTitle.setCustomValidity(`Ещё ${MIN_TITLE_LENGTH - valueLength} симв.`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    searchFormTitle.setCustomValidity(`Удалите лишние ${valueLength - MAX_TITLE_LENGTH} симв.`);
  } else {
    searchFormTitle.setCustomValidity('');
  }
  searchFormTitle.reportValidity();
});

const validateRoomsInput = (evt) => {
  const capacityOptions = ROOMS_FOR_GUESTS_MAP[evt.target.value];
  for (const currentCapacityItem of searchForm.capacity.children) {
    currentCapacityItem.disabled = !capacityOptions.includes(currentCapacityItem.value);
  }
  searchForm.capacity.value = capacityOptions[0];
};

export {togglePageActiveState, validateRoomsInput, roomsQty};
