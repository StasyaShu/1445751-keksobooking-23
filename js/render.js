import {APARTMENT_TYPES} from './data.js';

const offerTemplate = document.querySelector('#card').content.querySelector('.popup');
const imgTemplate = document.querySelector('#card').content.querySelector('.popup__photo');

const insertFeatures = function (element, array) {
  element.innerHTML = '';

  if(array) {
    array.forEach((item) => {
      const featureItem = document.createElement('li');
      featureItem.classList.add('popup__feature', `popup__feature--${item}`);
      element.appendChild(featureItem);
    });
  }
};

const insertPhoto = (element, array) => {
  element.innerHTML = '';

  if(array){
    array.forEach((item) => {
      const adPhoto = imgTemplate.cloneNode(true);
      adPhoto.src = item;
      element.appendChild(adPhoto);
    });
  }
};

const generateAd = (ad) => {
  const adsElement = offerTemplate.cloneNode(true);
  if (ad.offer.title) {
    adsElement.querySelector('.popup__title').textContent = ad.offer.title;
  } else {adsElement.querySelector('.popup__title').classList.add('hidden');}
  if (ad.offer.address) {
    adsElement.querySelector('.popup__text--address').textContent = ad.offer.address;
  } else {adsElement.querySelector('.popup__text--address').classList.add('hidden');}
  if (ad.offer.price) {
    adsElement.querySelector('.popup__text--price').textContent = `${ad.offer.price} ₽/ночь`;
  } else {adsElement.querySelector('.popup__text--price').classList.add('hidden');}
  if (ad.offer.type) {
    adsElement.querySelector('.popup__type').textContent = APARTMENT_TYPES[ad.offer.type].name;
  } else {adsElement.querySelector('.popup__type').classList.add('hidden');}
  if (ad.offer.rooms && ad.offer.guests) {
    adsElement.querySelector('.popup__text--capacity').textContent = `${ad.offer.rooms} комнаты для ${ad.offer.guests} гостей`;
  } else {adsElement.querySelector('.popup__text--capacity').classList.add('hidden');}
  if (ad.offer.checkin && ad.offer.checkout) {
    adsElement.querySelector('.popup__text--time').textContent = `Заезд после ${ad.offer.checkin}, выезд до ${ad.offer.checkout}`;
  } else {adsElement.querySelector('.popup__text--time').classList.add('hidden');}
  if (ad.offer.features) {
    insertFeatures(adsElement.querySelector('.popup__features'), ad.offer.features);
  } else {adsElement.querySelector('.popup__features').classList.add('hidden');}
  if (ad.offer.description) {
    adsElement.querySelector('.popup__description').textContent = ad.offer.description;
  } else {adsElement.querySelector('.popup__description').classList.add('hidden');}
  if (ad.offer.photos) {
    insertPhoto(adsElement.querySelector('.popup__photos'), ad.offer.photos);
  } else {adsElement.querySelector('.popup__photos').classList.add('hidden');}
  if (ad.author.avatar) {
    adsElement.querySelector('.popup__avatar').src = ad.author.avatar;
  } else {adsElement.querySelector('.popup__avatar').classList.add('hidden');}
  return adsElement;
};

export {generateAd};
