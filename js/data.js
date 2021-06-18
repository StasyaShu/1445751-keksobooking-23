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
const TYPE_TRANSLATE = {
  flat: 'Квартира',
  bungalow: 'Бунгало ',
  house: 'Дом ',
  palace: 'Дворец ',
  hotel: 'Отель',
};

export {FEATURES, PHOTOS, HOUSING_TYPES, CHECKIN_ARRAY, CHECKOUT_ARRAY, LATITUDE, LONGITUDE, PRICE, ROOMS, GUESTS, TYPE_TRANSLATE};
