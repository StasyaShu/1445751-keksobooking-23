const getRandomInteger = (min, max) => {

  if (min < 0 || max < 0) {
    throw new Error('getRandomInteger — аргументы могут быть только положительными числами');
  }
  min = Math.floor(min);
  max = Math.ceil(max);
  const rand = Math.random() * (max - min + 1) + min;
  return Math.floor(rand);
};

const getRandomFloatInteger = (min, max, digits) => {

  if (min < 0 || max < 0 || digits < 0) {
    throw new Error('getRandomFloatInteger — аргументы могут быть только положительными числами');
  }
  const number = Math.random() * (max - min) + min;
  return +number.toFixed(digits);
};

const getRandomArrayElement = (arr) => arr[getRandomInteger(0, arr.length - 1)];

const getShuffledArray = (array) => {
  let m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
};

const getLocation =  (min, max) => getRandomFloatInteger(min, max, 5);

export {getRandomInteger, getRandomFloatInteger, getRandomArrayElement, getShuffledArray, getLocation};
