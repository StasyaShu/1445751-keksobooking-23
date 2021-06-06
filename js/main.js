function getRandomInteger (min, max) {

  if (min < 0 || max < 0) {
    throw new Error('getRandomInteger — аргументы могут быть только положительными числами');
  }
  min = Math.floor(min);
  max = Math.ceil(max);
  const rand = Math.random() * (max - min + 1) + min;
  return Math.floor(rand);
}
getRandomInteger (0, 10);

function getRandomFloatInteger (min, max, digits) {

  if (min < 0 || max < 0 || digits < 0) {
    throw new Error('getRandomFloatInteger — аргументы могут быть только положительными числами');
  }
  const number = Math.random() * (max - min) + min;
  return +number.toFixed(digits);
}
getRandomFloatInteger (5, 9, 2);

// напишите необходимые функции для создания массива из 10 сгенерированных JS-объектов.
// Каждый объект массива — описание похожего объявления неподалёку.

// Структура каждого объекта должна быть следующей:

// author, объект — описывает автора. Содержит одно поле:
// avatar, строка — адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} — это число от 1 до 8 с ведущим нулём.
// Например, 01, 02 и т. д. Адреса изображений не повторяются.

// offer, объект — содержит информацию об объявлении. Состоит из полей:
// title, строка — заголовок предложения. Придумайте самостоятельно.
// address, строка — адрес предложения.
// Для простоты пусть пока составляется из географических координат по маске {{location.x}}, {{location.y}}.
// price, число — стоимость. Случайное целое положительное число.
// type, строка — одно из пяти фиксированных значений: palace, flat, house, bungalow или hotel.
// rooms, число — количество комнат. Случайное целое положительное число.
// guests, число — количество гостей, которое можно разместить. Случайное целое положительное число.
// checkin, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.
// checkout, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.
// features, массив строк — массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator, conditioner.
// Значения не должны повторяться.
// description, строка — описание помещения. Придумайте самостоятельно.
// photos, массив строк — массив случайной длины из значений:
// https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg,
// https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg,
// https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg.

// location, объект — местоположение в виде географических координат. Состоит из двух полей:
// lat, число с плавающей точкой — широта, случайное значение от 35.65000 до 35.70000.
// lng, число с плавающей точкой — долгота, случайное значение от 139.70000 до 139.80000.

Array.prototype.getRandomItem = function () {
  let item = Math.floor(Math.random() * this.length);
  return this[item];
}

let allFeatures = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner',];
const createArr = ([...source], maxLength) => Array.from(
  { length: Math.min(source.length, 1 + Math.random() * maxLength | 0) },
  () => source.splice(Math.random() * source.length | 0, 1)[0]
);
const [arr1, arr2, arr3 ] = [...Array(3)].map(() => createArr(allFeatures, allFeatures.length+1));

let avatars = [
  'img/avatars/user01.png',
  'img/avatars/user02.png',
  'img/avatars/user03.png',
  'img/avatars/user04.png',
  'img/avatars/user05.png',
  'img/avatars/user06.png',
  'img/avatars/user07.png',
  'img/avatars/user08.png',
]

let lat = getRandomFloatInteger(35.65000, 35.70000, 5);
let lng = getRandomFloatInteger(139.70000, 139.80000, 5);

const ANNOUNCEMENT = {
  author: {
    avatar: avatars.getRandomItem()
  }
}

const OFFER = {
  title: 'Сдаю в аренду квартиру',
  address: '{{location.x}}, {{location.y}}',
  price: getRandomInteger(1000, 1000000),
  type: 'flat',
  rooms: getRandomInteger(1, 3),
  guests: getRandomInteger(1, 5),
  checkin: '14:00',
  checkout: '12:00',
  features: [arr1, arr2, arr3],
}
