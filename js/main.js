import {generateAds} from './render.js';
import {offersArray} from './offers-array.js';
import {togglePageActiveState} from './form.js';

const similarOffer = document.querySelector('#map-canvas');

generateAds(offersArray);
similarOffer.appendChild(generateAds(offersArray));

togglePageActiveState(false);
