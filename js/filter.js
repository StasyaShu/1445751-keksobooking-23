import {filtersForm} from './data.js';
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

const featureFilterFormNodesArr = Array.from(filtersForm.features);

const filterPinsByType = (dataElement) =>
  filtersForm['housing-type'].value === dataElement.offer.type || filtersForm['housing-type'].value === VALUE_OF_ALL_ADS;

const filterPinsByPrice = (dataElement) =>
  PRICE_MAP[filtersForm['housing-price'].value].min < dataElement.offer.price && PRICE_MAP[filtersForm['housing-price'].value].max > dataElement.offer.price;

const filterPinsByRooms = (dataElement) => Number(filtersForm['housing-rooms'].value) === dataElement.offer.rooms || filtersForm['housing-rooms'].value === VALUE_OF_ALL_ADS;

const filterPinsByGuests = (dataElement) => Number(filtersForm['housing-guests'].value) === dataElement.offer.guests || filtersForm['housing-guests'].value === VALUE_OF_ALL_ADS;

const filterPinsByFeatures = (dataElement) => !featureFilterFormNodesArr.some((elem) => {
  const isChecked = elem.checked;
  const doesentIncludeVal = dataElement.offer.features && !dataElement.offer.features.includes(elem.value);
  return  isChecked && doesentIncludeVal;
});

const filterMapPins = function (pins) {
  return pins.
    filter(filterPinsByType).
    filter(filterPinsByPrice).
    filter(filterPinsByRooms).
    filter(filterPinsByGuests).
    filter(filterPinsByFeatures);
};

export {filterMapPins};
