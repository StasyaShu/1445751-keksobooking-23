import {togglePageActiveState} from './form.js';
import {generateAd} from './render.js';
import {adForm, filtersForm, PinSetting, TOKYO_CENTER, OFFERS_NUMBER} from './data.js';
const inputAddress = document.querySelector('#address');
const clearButton = document.querySelector('.ad-form__reset');

togglePageActiveState(true);

const map = L.map('map-canvas')
  .on('load', () => {
    togglePageActiveState(false);
  })
  .setView(TOKYO_CENTER, 12);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon(PinSetting.MAIN);
const regularPinIcon = L.icon(PinSetting.REGULAR);

const mainPinMarker = L.marker(TOKYO_CENTER, {
  draggable: true,
  icon: mainPinIcon,
});
mainPinMarker.addTo(map);

mainPinMarker.on('move', (evt) => {
  inputAddress.value = `${evt.target.getLatLng().lat.toFixed(5)}, ${evt.target.getLatLng().lng.toFixed(5)}`;
});

const addPoints = (ads) => {
  ads.forEach((item) => {
    const pinMarker = L.marker(item.location, {
      icon: regularPinIcon,
    });
    pinMarker.addTo(map).bindPopup(generateAd(item));
  });
};

// Функция отрисовки пинов в случае успешного получения данных с сервера
const onGetDataSuccess = (offers) => {
  addPoints(offers.slice(0, OFFERS_NUMBER));
};

const setDefaultAddress = () => {
  mainPinMarker.setLatLng(TOKYO_CENTER);
  map.setView(TOKYO_CENTER, 12);
};

clearButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  adForm.reset();
  filtersForm.reset();
  setDefaultAddress();
});

export {addPoints, setDefaultAddress, onGetDataSuccess};
