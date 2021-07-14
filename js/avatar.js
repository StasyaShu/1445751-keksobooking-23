import {FILE_TYPES, adFormPhoto, usersAvatar, inputFileOffersPhoto, inputFileUsersAvatar} from './data.js';

const showImage = (input, preview) => {
  const file = input.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((item) => fileName.endsWith(item));

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      preview.src = reader.result;
    });
    reader.readAsDataURL(file);
  }
};

const showPhoto = () => showImage(inputFileOffersPhoto, adFormPhoto);
const showAvatar = () => showImage(inputFileUsersAvatar, usersAvatar);

export {showPhoto, showAvatar};
