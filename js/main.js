// import {offersArray} from './offers-array.js';
import {onGetDataSuccess} from './map.js';
import './map.js';
import {URL_GET} from './data.js';
import {getData} from './backend.js';
import {onGetDataError} from './alerts.js';
// addPoints(offersArray);
// fetch(URL_GET)
//   .then((response) => response.json())
//   .then((offers) => {
//     addPoints(offers.slice(0, OFFERS_NUMBER));
//   });

getData(URL_GET, onGetDataSuccess, onGetDataError);


// const similarOffer = document.querySelector('#map-canvas');
// generateAds(offersArray);
// similarOffer.appendChild(generateAds(offersArray));
