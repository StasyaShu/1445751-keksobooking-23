import {
  APARTMENT_TYPES
} from './data.js';

const offerTemplate = document.querySelector('#card').content.querySelector('.popup');
const imgTemplate = document.querySelector('#card').content.querySelector('.popup__photo');

const insertFeatures = function (element, array) {
  element.innerHTML = '';

  array.forEach((item) => {
    const featureItem = document.createElement('li');
    featureItem.classList.add('popup__feature', `popup__feature--${item}`);
    element.appendChild(featureItem);
  });
};

const insertPhoto = (element, array) => {
  element.innerHTML = '';

  array.forEach((item) => {
    const adPhoto = imgTemplate.cloneNode(true);
    adPhoto.src = item;
    element.appendChild(adPhoto);
  });
};

const generateAd = (ad) => {
  const adsElement = offerTemplate.cloneNode(true);
  adsElement.querySelector('.popup__title').textContent = ad.offer.title;
  adsElement.querySelector('.popup__text--address').textContent = ad.offer.address;
  adsElement.querySelector('.popup__text--price').textContent = `${ad.offer.price} ₽/ночь`;
  adsElement.querySelector('.popup__type').textContent = APARTMENT_TYPES[ad.offer.type].name;
  adsElement.querySelector('.popup__text--capacity').textContent = `${ad.offer.rooms} комнаты для ${ad.offer.guests} гостей`;
  adsElement.querySelector('.popup__text--time').textContent = `Заезд после ${ad.offer.checkin}, выезд до ${ad.offer.checkout}`;
  insertFeatures(adsElement.querySelector('.popup__features'), ad.offer.features);
  adsElement.querySelector('.popup__description').textContent = ad.offer.description;
  insertPhoto(adsElement.querySelector('.popup__photos'), ad.offer.photos);
  adsElement.querySelector('.popup__avatar').src = ad.author.avatar;
  return adsElement;
};

export {generateAd};
