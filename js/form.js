const searchForm = document.querySelector('.ad-form');
const serchFormInputs = searchForm.querySelectorAll('input');
const serchFormSelects = searchForm.querySelectorAll('select');
const searchFormTextArea = searchForm.querySelector('#description');

const mapForm = document.querySelector('.map__filters');
const mapFormInputs = mapForm.querySelectorAll('input');
const mapFormSelects = mapForm.querySelectorAll('select');

const buttonsInForm = document.querySelectorAll('button');

const deactivateForm = () => {
  searchForm.classList.add('.ad-form--disabled');
  serchFormInputs.forEach((value) => {
    value.disabled = true;
  });
  serchFormSelects.forEach((value) => {
    value.disabled = true;
  });
  searchFormTextArea.disabled = true;
  mapForm.classList.add('.map__filters--disabled');
  mapFormInputs.forEach((value) => {
    value.disabled = true;
  });
  mapFormSelects.forEach((value) => {
    value.disabled = true;
  });
  buttonsInForm.forEach((value) => {
    value.disabled = true;
  });
};

const activateForm = () => {
  searchForm.classList.remove('.ad-form--disabled');
  serchFormInputs.forEach((value) => {
    value.disabled = false;
  });
  serchFormSelects.forEach((value) => {
    value.disabled = false;
  });
  searchFormTextArea.disabled = false;
  mapForm.classList.remove('.map__filters--disabled');
  mapFormInputs.forEach((value) => {
    value.disabled = false;
  });
  mapFormSelects.forEach((value) => {
    value.disabled = false;
  });
  buttonsInForm.forEach((value) => {
    value.disabled = false;
  });
};

export {deactivateForm, activateForm};
