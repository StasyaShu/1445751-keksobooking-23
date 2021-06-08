const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const HOUSING_TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECKIN_ARRAY = ['12:00', '13:00', '14:00'];
const CHECKOUT_ARRAY = ['12:00', '13:00', '14:00'];
const LATITUDE = {
  min: 35.65000,
  max: 35.70000,
};
const LONGITUDE = {
  min: 139.70000,
  max: 139.80000,
};
const PRICE = {
  min: 0,
  max: 1000000,
};
const ROOMS = {
  min: 1,
  max: 8,
};
const GUESTS = {
  min: 1,
  max: 10,
};

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

const getLocation =  () => ({
  lat: getRandomFloatInteger(LATITUDE.min, LATITUDE.max, 5),
  lng: getRandomFloatInteger(LONGITUDE.min, LONGITUDE.max, 5),
});

const getPrice = () => {
  getRandomInteger(PRICE.min, PRICE.max);
};

const getGuests = () => {
  getRandomInteger(GUESTS.min, GUESTS.max);
};

const getRooms = () => {
  getRandomInteger(ROOMS.min, ROOMS.max);
};

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
        address: CURRENT_LOCATION,
        price: getPrice(),
        type: getRandomArrayElement(getShuffledArray(HOUSING_TYPES)),
        rooms: getRooms(),
        guests: getGuests(),
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
const adsArray = getOfferArray(10);
adsArray;


