import {FILE_TYPES, adFormPhoto, inputFileOffersPhoto, inputFileUsersAvatar, usersAvatar} from './data.js';

const toShowUsersAvatar = () => {
  inputFileUsersAvatar.addEventListener('change', () => {
    const file = inputFileUsersAvatar.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((item) => fileName.endsWith(item));

    if (matches) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        usersAvatar.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  });
};

const toShowPhotosForOffer = () => {
  inputFileOffersPhoto.addEventListener('change', () => {
    const file = inputFileOffersPhoto.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((item) => fileName.endsWith(item));

    if (matches) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        adFormPhoto.src = reader.result;
        adFormPhoto.alt = 'Фотография жилья';
      });

      reader.readAsDataURL(file);
    }
  });
};

export {toShowUsersAvatar, toShowPhotosForOffer};
