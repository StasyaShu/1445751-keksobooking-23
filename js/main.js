import {generateAds} from './render.js';
import {offersArray} from './offers-array.js';
import {togglePageActiveState, validateRoomsInput, roomsQty} from './form.js';

const similarOffer = document.querySelector('#map-canvas');

generateAds(offersArray);
similarOffer.appendChild(generateAds(offersArray));

togglePageActiveState(false);
roomsQty.addEventListener('change', (validateRoomsInput));
