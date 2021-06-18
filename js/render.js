import {offersArray} from './util.js';
import {TYPE_TRANSLATE} from './data.js';

const similarOffer = document.querySelector('#map-canvas');
const offerTemplate = document.querySelector('#card').content.querySelector('.popup');
const imgTemplate = document.querySelector('#card').content.querySelector('.popup__photo');

const insertFeatures = function (element, array) {
  element.innerHTML = '';

  array.forEach((item) => {
    const featureItem = document.createElement('li');
    featureItem.classList.add('popup__feature');
    featureItem.classList.add(`popup__feature--${item}`);
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

const generateAds = (ads) => {
  const adsFragment = document.createDocumentFragment();
  ads.forEach((ad) => {
    const adsElement = offerTemplate.cloneNode(true);
    adsElement.querySelector('.popup__title').textContent = ad.offer.title;
    adsElement.querySelector('.popup__text--address').textContent = ad.offer.address;
    adsElement.querySelector('.popup__text--price').textContent = `${ad.offer.price} ₽/ночь`;
    adsElement.querySelector('.popup__type').textContent = TYPE_TRANSLATE[ad.offer.type];
    adsElement.querySelector('.popup__text--capacity').textContent = `${ad.offer.rooms} комнаты для ${ad.offer.guests} гостей`;
    adsElement.querySelector('.popup__text--time').textContent = `Заезд после ${ad.offer.checkin}, выезд до ${ad.offer.checkout}`;
    insertFeatures(adsElement.querySelector('.popup__features'), ad.offer.features);
    adsElement.querySelector('.popup__description').textContent = ad.offer.description;
    insertPhoto(adsElement.querySelector('.popup__photos'), ad.offer.photos);
    adsElement.querySelector('.popup__avatar').src = ad.author.avatar;
    adsFragment.appendChild(adsElement);
  });
  return adsFragment;
};
generateAds(offersArray);
similarOffer.appendChild(generateAds(offersArray));
similarOffer.innerHTML;
