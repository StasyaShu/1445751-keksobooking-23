import {onGetDataSuccess} from './map.js';
import {URL_GET} from './data.js';
import {getData} from './backend.js';
import {onGetDataError} from './alerts.js';

getData(URL_GET, onGetDataSuccess, onGetDataError);
