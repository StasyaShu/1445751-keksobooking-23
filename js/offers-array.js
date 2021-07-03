import {FEATURES, PHOTOS, HOUSING_TYPES, CHECKIN_ARRAY, CHECKOUT_ARRAY, LATITUDE, LONGITUDE, PRICE, ROOMS, GUESTS, OFFERS_NUMBER} from './data.js';
import {getRandomInteger, getRandomArrayElement, getShuffledArray, getLocation} from './util.js';

const getOffersArray = (amount) => {
  const offerArray = [];
  for (let i = 1; i <= amount; i++) {
    const currentLocation = getLocation(LATITUDE, LONGITUDE);
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

      location: currentLocation,
    });
  }
  return offerArray;
};

const offersArray = getOffersArray(OFFERS_NUMBER);

export {offersArray};
