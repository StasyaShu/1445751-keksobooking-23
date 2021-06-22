const forms = document.querySelectorAll('form');
const searchForm = document.querySelector('.ad-form');
const mapForm = document.querySelector('.map__filters');

const toggleDisabledOnFormNodes = (isDisabled) => {
  forms.forEach((value) => {
    for (const element of value.elements) {
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
