import {generateAds} from './render.js';
import {offersArray} from './offers-array.js';
import {togglePageActiveState} from './form.js';
import {addPoints} from './map.js';
import './map.js';

const ads = generateAds(offersArray);
addPoints(ads);

// const similarOffer = document.querySelector('#map-canvas');

// generateAds(offersArray);
// similarOffer.appendChild(generateAds(offersArray));

togglePageActiveState(false);
