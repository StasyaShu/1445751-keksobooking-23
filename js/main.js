function getSomeNumber (min, max) {
  min = Math.floor(min);
  max = Math.ceil(max);
  let rand = Math.random() * (max - min + 1) + min;
  return Math.floor(rand);
}

getSomeNumber (0, 10);

function getRandomNumber (min, max, digits) {
  let number = Math.random() * (max - min + 1) + min;
  return number.toFixed(digits);
}

getRandomNumber (5, 9, 2);
