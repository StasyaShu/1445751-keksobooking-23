import {getRandomInteger, getRandomArrayElement, getShuffledArray, getLocation} from './util.js';
import {FEATURES, PHOTOS, HOUSING_TYPES, CHECKIN_ARRAY, CHECKOUT_ARRAY, PRICE, ROOMS, GUESTS} from './data.js';

const getOfferArray = (amount) => {
  const offerArray = [];
  for (let i = 1; i <= amount; i++) {
    const CURRENT_LOCATION = getLocation();
    offerArray.push({
      author: {
        avatar: `img/avatars/user0${getRandomInteger(1, 8)}.png`,
      },

      offer: {
        title: 'Аренда жилья в Токио',
        address: `${CURRENT_LOCATION.lat}, ${CURRENT_LOCATION.lng}`,
        price: getRandomInteger(PRICE.min, PRICE.max),
        type: getRandomArrayElement(getShuffledArray(HOUSING_TYPES)),
        rooms: getRandomInteger(ROOMS.min, ROOMS.max),
        guests: getRandomInteger(GUESTS.min, GUESTS.max),
        checkin: getRandomArrayElement(CHECKIN_ARRAY),
        checkout: getRandomArrayElement(CHECKOUT_ARRAY),
        features: getShuffledArray(FEATURES).slice(0, getRandomInteger(1, FEATURES.length)),
        description: 'Чистое, светлое помещение для комфортного проживания с отличной инфраструктурой.',
        photos: getShuffledArray(PHOTOS).slice(0, getRandomInteger(1, PHOTOS.length)),
        location: CURRENT_LOCATION,
      },
    });
  }
  return offerArray;
};
const offersArray = getOfferArray(10);
offersArray;


