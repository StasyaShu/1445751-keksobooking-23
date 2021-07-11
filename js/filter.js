import {filtersForm, MIDDLE_PRICE, LOW_PRICE, HIGH_PRICE} from './data.js';
import {getRandomInteger} from './util.js';
const HOUSING_PRICE = {
  middle: getRandomInteger(MIDDLE_PRICE.min, MIDDLE_PRICE.max),
  low: getRandomInteger(0, LOW_PRICE),
  high: getRandomInteger(HIGH_PRICE.min, HIGH_PRICE.max),
};
const ROOMS_NUMBER = {
  1: 'Одна комната',
  2: 'Две комнаты',
  3: 'Три комнаты',
};
const GUESTS_NUMBER = {
  1: 'Один гость',
  2: 'Два гостя',
  0: 'Не для гостей',
};
const VALUE_OF_ALL_ADS = 'any';

const filterPinsByType = function (dataElement) {
  return filtersForm['housing-type'].value === dataElement.offer.type || filtersForm['housing-type'].value === VALUE_OF_ALL_ADS;
};

const filterPinsByPrice = function (dataElement) {
  for (const key in HOUSING_PRICE) {
    if (key === filtersForm['housing-price'].value) {
      return filtersForm['housing-price'].value === dataElement.offer.price;
    }
    return filtersForm['housing-price'].value === VALUE_OF_ALL_ADS;
  }
  // if (filtersForm['housing-price'].value === HOUSING_PRICE.key) {
  //   return filtersForm['housing-price'].value === dataElement.offer.price;
  // }
  // return filtersForm['housing-price'].value === VALUE_OF_ALL_ADS;
};

const filterPinsByRooms = function (dataElement) {
  for (const key in ROOMS_NUMBER) {
    if (key === filtersForm['housing-rooms'].value) {
      return filtersForm['housing-rooms'].value === dataElement.offer.rooms;
    }
    return filtersForm['housing-rooms'].value || VALUE_OF_ALL_ADS;
  }
  // if (filtersForm['housing-rooms'].value === ROOMS_NUMBER.key) {
  //   return filtersForm['housing-rooms'].value === dataElement.offer.rooms;
  // }
  // return filtersForm['housing-rooms'].value || VALUE_OF_ALL_ADS;
};

const filterPinsByGuests = function (dataElement) {
  for (const key in GUESTS_NUMBER) {
    if (key === filtersForm['housing-guests'].value) {
      return filtersForm['housing-guests'].value === dataElement.offer.guests;
    }
    return filtersForm['housing-guests'].value || VALUE_OF_ALL_ADS;
  }
};

const getFeatureValues = () => {
  const featuresArray = [];
  filtersForm.features.forEach((filter) => {
    const value = filter.getAttribute('value');
    if (filter.checked) {
      featuresArray.push(value);
    }
  });
  return featuresArray;
};

const featuresList = getFeatureValues();

const filterPinsByFeatures = function (dataElement) {
  if (featuresList.length > 0 && (!dataElement.offer.features || dataElement.offer.features.length === 0)) {
    return false;
  }
  for (const feature of featuresList) {
    if (!dataElement.offer.features.includes(feature)) {
      return false;
    }
  }
};

const filterMapPins = function (pins) {
  return pins.
    filter(filterPinsByType).
    filter(filterPinsByPrice).
    filter(filterPinsByRooms).
    filter(filterPinsByGuests).
    filter(filterPinsByFeatures);
};

export {filterMapPins};
