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
const APARTMENT_TYPES = {
  flat: {
    name: 'Квартира',
    minPrice: 1000,
  },
  bungalow: {
    name: 'Бунгало',
    minPrice: 0,
  },
  house: {
    name: 'Дом',
    minPrice: 5000,
  },
  palace: {
    name: 'Дворец',
    minPrice: 10000,
  },
  hotel: {
    name: 'Отель',
    minPrice: 3000,
  },
};

const ROOMS_FOR_GUESTS_MAP = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0'],
};

const PinSetting = {
  main: {
    iconUrl: 'img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  },
  regular: {
    iconUrl: 'img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  },
};

const TOKYO_CENTER = {
  lat: 35.681700,
  lng: 139.753891,
};

const OFFERS_NUMBER = 10;

export {
  FEATURES,
  PHOTOS,
  HOUSING_TYPES,
  CHECKIN_ARRAY,
  CHECKOUT_ARRAY,
  LATITUDE,
  LONGITUDE,
  PRICE,
  ROOMS,
  GUESTS,
  APARTMENT_TYPES,
  ROOMS_FOR_GUESTS_MAP,
  PinSetting,
  TOKYO_CENTER,
  OFFERS_NUMBER
};
