import {
  filtersForm
} from './data.js';
const VALUE_OF_ALL_ADS = 'any';
const PRICE_MAP = {
  any: {
    min: -Infinity,
    max: Infinity,
  },
  middle: {
    min: 10000,
    max: 50000,
  },
  low: {
    min: 0,
    max: 10000,
  },
  high: {
    min: 50000,
    max: Infinity,
  },
};

const filterPinsByType = (dataElement) =>
  filtersForm['housing-type'].value === dataElement.offer.type || filtersForm['housing-type'].value === VALUE_OF_ALL_ADS;

const filterPinsByPrice = (dataElement) =>
  PRICE_MAP[filtersForm['housing-price'].value].min < dataElement.offer.price && PRICE_MAP[filtersForm['housing-price'].value].max > dataElement.offer.price;

const filterPinsByRooms = (dataElement) => Number(filtersForm['housing-rooms'].value) === dataElement.offer.rooms || filtersForm['housing-rooms'].value === VALUE_OF_ALL_ADS;

const filterPinsByGuests = (dataElement) => Number(filtersForm['housing-guests'].value) === dataElement.offer.guests || filtersForm['housing-guests'].value === VALUE_OF_ALL_ADS;

const featureFilterFormNodesArr = Array.from(filtersForm.features);

const getSelectedFeatures = () => {
  const featuresArray = [];
  featureFilterFormNodesArr.forEach((filter) => {
    const value = filter.getAttribute('value');
    if (filter.checked) {
      featuresArray.push(value);
    }
  });
  return featuresArray;
};

const filterPinsByFeatures = (pinElement) => {
  const featuresList = getSelectedFeatures();
  return Boolean(
    pinElement.offer.features &&
    featuresList.every((item) => pinElement.offer.features.includes(item)),
  );
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
