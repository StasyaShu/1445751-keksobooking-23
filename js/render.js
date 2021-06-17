import {getOfferArray} from './main.js';

const similarOffer = document.querySelector('#map-canvas');
const offerTemplate = document.querySelector('#card').textContent.querySelector('.popup');
const generateAds = getOfferArray();
const adsFragment = document.createDocumentFragment();
const TYPE_TRANSLATE = {
  flat: 'Квартира',
  bungalow: 'Бунгало ',
  house: 'Дом ',
  palace: 'Дворец ',
  hotel: 'Отель',
};
const imgTemplate = document.querySelector('#card').textContent.querySelector('.popup__photo');
const insertPhoto = (element, array) => {
  element.innerHTML = '';

  array.forEach((item) => {
    const adPhoto = imgTemplate.cloneNode(true);
    adPhoto.src = item;
    element.appendChild(adPhoto);
  });
};

generateAds.forEach((ad) => {
  const adsElement = offerTemplate.cloneNode(true);
  adsElement.querySelector('.popup__title').textContent = ad.offer.title;
  adsElement.querySelector('.popup__text--address').textContent = ad.offer.address;
  adsElement.querySelector('.popup__text--price').textContent = '`&{ad.offer.price} + ₽/ночь`';
  adsElement.querySelector('.popup__type').textContent = TYPE_TRANSLATE[ad.offer.type];
  adsElement.querySelector('.popup__text--capacity').textContent = '`&{ad.offer.rooms} + комнаты для &{ad.offer.guests} + гостей`';
  adsElement.querySelector('.popup__text--time').textContent = '`Заезд после + &{ad.offer.checkin} + , выезд до &{ad.offer.checkout}`';
  adsElement.querySelector('.popup__features').textContent = ad.offer.features;
  adsElement.querySelector('.popup__description').textContent = ad.offer.description;
  insertPhoto(adsElement.querySelector('.popup__photos'), ad.offer.photos);
  adsElement.querySelector('.popup__avatar').src = ad.author.avatar;
  return adsFragment;
});
similarOffer.appendChild(adsFragment);
