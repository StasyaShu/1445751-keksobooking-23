import {onGetDataSuccess} from './map.js';
import {URL_GET} from './data.js';
import {getData} from './backend.js';
import {onGetDataError} from './alerts.js';
import {toShowUsersAvatar, toShowPhotosForOffer} from './avatar.js';

window.addEventListener('load', () => {
  getData(URL_GET, onGetDataSuccess, onGetDataError);
  toShowUsersAvatar();
  toShowPhotosForOffer();
});


