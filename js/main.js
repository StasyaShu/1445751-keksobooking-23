import {URL_GET, inputFileOffersPhoto, inputFileUsersAvatar} from './data.js';
import {onGetDataSuccess} from './map.js';
import {getData} from './backend.js';
import {onGetDataError} from './alerts.js';
import {showPhoto, showAvatar} from './avatar.js';

getData(URL_GET, onGetDataSuccess, onGetDataError);

inputFileOffersPhoto.addEventListener('change', showPhoto);
inputFileUsersAvatar.addEventListener('change', showAvatar);
