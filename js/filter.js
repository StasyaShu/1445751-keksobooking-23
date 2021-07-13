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

const filterPinsByType = (dataElement) =>
  filtersForm['housing-type'].value === dataElement.offer.type || filtersForm['housing-type'].value === VALUE_OF_ALL_ADS;

const filterPinsByPrice = (dataElement) =>
  PRICE_MAP[filtersForm['housing-price'].value].min < dataElement.offer.price && PRICE_MAP[filtersForm['housing-price'].value].max > dataElement.offer.price;

const filterPinsByRooms = (dataElement) => Number(filtersForm['housing-rooms'].value) === dataElement.offer.rooms || filtersForm['housing-rooms'].value === VALUE_OF_ALL_ADS;

const filterPinsByGuests = (dataElement) => Number(filtersForm['housing-guests'].value) === dataElement.offer.guests || filtersForm['housing-guests'].value === VALUE_OF_ALL_ADS;

const featureFilterFormNodesArr = Array.from(filtersForm.features);

const filterPinsByFeatures = (dataElement) => {
  return !featureFilterFormNodesArr.some((elem) => elem.checked && !dataElement.offer.features?.includes(elem.value));
};

// const getSelectedFeatures = () => {
//   const featuresArray = [];
//   featureFilterFormNodesArr.forEach((filter) => {
//     if (filter.checked) {
//       featuresArray.push(filter.value);
//     }
//     return false;
//   });
//   return featuresArray;
// };

// const filterPinsByFeatures = (dataElement) => {
//   const featuresList = getSelectedFeatures();
//   return Boolean(
//    dataElement.offer.features &&
//    featuresList.every((item) => dataElement.offer.features.includes(item)));
// };


const filterMapPins = function (pins) {
  return pins.
    filter(filterPinsByType).
    filter(filterPinsByPrice).
    filter(filterPinsByRooms).
    filter(filterPinsByGuests).
    filter(filterPinsByFeatures);
};

export {filterMapPins};
