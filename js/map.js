import {
  togglePageActiveState
} from './form.js';
import {
  generateAd
} from './render.js';
import {
  PinSetting,
  TOKYO_CENTER
} from './data.js';
const resetButton = document.querySelector('.ad-form__reset');
const inputAddress = document.querySelector('#address');

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

const mainPinIcon = L.icon(PinSetting.main);
const regularPinIcon = L.icon(PinSetting.regular);

const mainPinMarker = L.marker(TOKYO_CENTER, {
  draggable: true,
  icon: mainPinIcon,
});
mainPinMarker.addTo(map);

mainPinMarker.on('move', (evt) => {
  inputAddress.value = `${evt.target.getLatLng().lat}, ${evt.target.getLatLng().lng}`;
});

resetButton.addEventListener('click', () => {
  mainPinMarker.setLatLng(TOKYO_CENTER);
  map.setView(TOKYO_CENTER, 12);
});

const addPoints = (ads) => {
  ads.forEach((item) => {
    const pinMarker = L.marker(item.location, {
      draggable: true,
      icon: regularPinIcon,
    });
    pinMarker.addTo(map).bindPopup(generateAd(item));
  });
};

export {
  addPoints
};