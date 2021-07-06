// import {offersArray} from './offers-array.js';
import {addPoints, setDefaultAddress} from './map.js';
import './map.js';
import {postData} from './backend.js';
import {URL_GET} from './data.js';

// addPoints(offersArray);
fetch(URL_GET)
  .then((response) => response.json())
  .then((offers) => {
    addPoints(offers);
  });

setDefaultAddress();
postData();

// const similarOffer = document.querySelector('#map-canvas');
// generateAds(offersArray);
// similarOffer.appendChild(generateAds(offersArray));
