const searchForm = document.querySelector('.ad-form');
const mapForm = document.querySelector('.map__filters');

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

export {togglePageActiveState};
