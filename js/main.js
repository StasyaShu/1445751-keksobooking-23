function getInteger (min, max) {
  min = Math.floor(min);
  max = Math.ceil(max);

  if (min >= 0 && max >= 0) {
    const rand = Math.random() * (max - min + 1) + min;
    return Math.floor(rand);
  } else {
    throw new Error('getInteger — аргументы могут быть только положительными числами');
  }
}
getInteger (0, 10);

function getCoordinates (min, max, digits) {

  if (min >= 0 && max >= 0 && digits >= 0) {
    const number = Math.random() * (max - min + 1) + min;
    return +number.toFixed(digits);
  } else {
    throw new Error('getCoordinates — аргументы могут быть только положительными числами');
  }
}
getCoordinates (5, 9, 2);
