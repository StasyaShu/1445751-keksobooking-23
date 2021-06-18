import {FEATURES, PHOTOS, HOUSING_TYPES, CHECKIN_ARRAY, CHECKOUT_ARRAY, LATITUDE, LONGITUDE, PRICE, ROOMS, GUESTS} from './data.js';

const getRandomInteger = (min, max) => {

  if (min < 0 || max < 0) {
    throw new Error('getRandomInteger — аргументы могут быть только положительными числами');
  }
  min = Math.floor(min);
  max = Math.ceil(max);
  const rand = Math.random() * (max - min + 1) + min;
  return Math.floor(rand);
};

const getRandomFloatInteger = (min, max, digits) => {

  if (min < 0 || max < 0 || digits < 0) {
    throw new Error('getRandomFloatInteger — аргументы могут быть только положительными числами');
  }
  const number = Math.random() * (max - min) + min;
  return +number.toFixed(digits);
};

const getRandomArrayElement = (arr) => arr[getRandomInteger(0, arr.length - 1)];

const getShuffledArray = (array) => {
  let m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
};

const getLocation =  () =>  ({
  lat: getRandomFloatInteger(LATITUDE.min, LATITUDE.max, 5),
  lng: getRandomFloatInteger(LONGITUDE.min, LONGITUDE.max, 5),
});

const getOffersArray = (amount) => {
  const offerArray = [];
  for (let i = 1; i <= amount; i++) {
    const currentLocation = getLocation();
    offerArray.push({
      author: {
        avatar: `img/avatars/user0${getRandomInteger(1, 8)}.png`,
      },

      offer: {
        title: 'Аренда жилья в Токио',
        address: `${currentLocation.lat}, ${currentLocation.lng}`,
        price: getRandomInteger(PRICE.min, PRICE.max),
        type: getRandomArrayElement(getShuffledArray(HOUSING_TYPES)),
        rooms: getRandomInteger(ROOMS.min, ROOMS.max),
        guests: getRandomInteger(GUESTS.min, GUESTS.max),
        checkin: getRandomArrayElement(CHECKIN_ARRAY),
        checkout: getRandomArrayElement(CHECKOUT_ARRAY),
        features: getShuffledArray(FEATURES).slice(0, getRandomInteger(1, FEATURES.length)),
        description: 'Чистое, светлое помещение для комфортного проживания с отличной инфраструктурой.',
        photos: getShuffledArray(PHOTOS).slice(0, getRandomInteger(1, PHOTOS.length)),
      },

      location: {
        lat: currentLocation.lat,
        lng: currentLocation.lng,
      },
    });
  }
  return offerArray;
};

const offersArray = getOffersArray(10);
offersArray;

export {offersArray};
