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
  MAIN: {
    iconUrl: 'img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  },
  REGULAR: {
    iconUrl: 'img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  },
};

const OFFERS_NUMBER = 10;

const TOKYO_CENTER = {
  lat: 35.68170,
  lng: 139.75389,
};

const URL_POST = 'https://23.javascript.pages.academy/keksobooking';
const URL_GET = 'https://23.javascript.pages.academy/keksobooking/data';
const adForm = document.querySelector('.ad-form');
const filtersForm = document.querySelector('.map__filters');
const FILE_TYPES = ['gif', 'jpeg', 'jpg', 'png', 'webp', 'svg'];
const adFormPhoto = adForm.querySelector('.ad-form__img');
const inputFileOffersPhoto = adForm.querySelector('#images');
const inputFileUsersAvatar = adForm.querySelector('.ad-form-header__input');
const usersAvatar = adForm.querySelector('.ad-form-header__img');
const ALERT_SHOW_TIME = 5000;
const ESC_KEY_CODE = 27;

export {ALERT_SHOW_TIME, ESC_KEY_CODE, APARTMENT_TYPES, ROOMS_FOR_GUESTS_MAP, PinSetting, OFFERS_NUMBER, TOKYO_CENTER, URL_POST, URL_GET, adForm, filtersForm, FILE_TYPES, adFormPhoto, inputFileOffersPhoto, inputFileUsersAvatar, usersAvatar};
