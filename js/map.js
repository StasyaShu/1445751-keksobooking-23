const resetButton = document.querySelector('.ad-form__reset');

const map = L.map('map-canvas')
  .on('load', () => {
    'Карта инициализирована';
  })
  .setView({
    lat: 35.681700,
    lng: 139.753891,
  }, 12);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker({
  lat: 35.681700,
  lng: 139.753891,
}, {
  draggable: true,
  icon: mainPinIcon,
});
mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  evt.target.getLatLng();
});

resetButton.addEventListener('click', () => {
  mainPinMarker.setLatLng({
    lat: 35.681700,
    lng: 139.753891,
  });

  map.setView({
    lat: 35.681700,
    lng: 139.753891,
  }, 12);
});

export const addPoints = (ads) => {
  const icon = L.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  ads.forEach((item) => {

    const otherPinMarker = L.marker({
      lat: item.coords.lat,
      lng: item.coords.lng,
    }, {
      draggable: true,
      icon: icon,
    });

    otherPinMarker.addTo(map);
    otherPinMarker.bindPopup(item.element);
  });
};
