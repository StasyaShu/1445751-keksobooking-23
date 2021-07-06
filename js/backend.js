import {URL_POST, adForm, filtersForm} from './data.js';
import {setDefaultAddress} from './map.js';

const postData = (onSuccess, onError) => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    fetch(URL_POST, {
      method: 'POST',
      body: new FormData(evt.target),
    })
      .then((response) => {
        if (response.ok) {
          onSuccess();
          adForm.reset();
          filtersForm.reset();
          setDefaultAddress();
        } else {
          onError();
        }
      })
      .catch((error) => onError(error));
  });
};

export {postData};
