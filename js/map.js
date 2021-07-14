import {togglePageActiveState} from './form.js';
import {generateAd} from './render.js';
import {adForm, filtersForm, PinSetting, TOKYO_CENTER, OFFERS_NUMBER} from './data.js';
import {filterMapPins} from './filter.js';
import {debounce} from './util.js';
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

const markerGroup = L.layerGroup().addTo(map);

const addPoints = (ads) => {
  ads.forEach((item) => {
    const pinMarker = L.marker(item.location, {
      icon: regularPinIcon,
    });
    pinMarker.addTo(markerGroup).bindPopup(generateAd(item));
  });
};

const setDefaultAddress = () => {
  mainPinMarker.setLatLng(TOKYO_CENTER);
  map.setView(TOKYO_CENTER, 12);
};

const reset = () => {
  setDefaultAddress();
  adForm.reset();
  filtersForm.reset();
  scrollTo({top: 0, behavior: 'smooth'});
};

const onGetDataSuccess = (offers) => {
  const allOffersArr = offers.slice(0, OFFERS_NUMBER);
  addPoints(allOffersArr);

  filtersForm.addEventListener('change', debounce(() => {
    markerGroup.clearLayers();
    addPoints(filterMapPins(allOffersArr));
  }));

  filtersForm.addEventListener('reset', () => {
    markerGroup.clearLayers();
    addPoints(allOffersArr);
  });
};

clearButton.addEventListener('click', reset);

export {addPoints, setDefaultAddress, onGetDataSuccess, reset, map};
