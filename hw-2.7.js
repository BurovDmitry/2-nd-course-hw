

// Задание 1

let textUser = prompt('Покричите', 'ААААА(5)');

let text = 'ААААА';

if (textUser.toUpperCase() === text.toUpperCase()) {
  console.log('Вам стало легче?');

} else {
  console.log('Вы плохо кричали');
}

/*
// Задание 2

function searchStart(str, search) {

  str.forEach((product) => {
      if (product.toLowerCase().startsWith(search.toLowerCase())) {
          console.log(product);
      }
  });
  return str;
};

searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'); // ['кошка', 'комар']
searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'); // ['груша']
searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'); // []

// Задание 3

const a = 32.58884;
console.log(Math.round(a));
console.log(Math.ceil(a));
console.log(Math.fround(a));


// Задание 4

const b = [52, 53, 49, 77, 21, 32];
console.log(Math.min(...b));
console.log(Math.max(...b));



// Задание 5

console.log (Math.round(Math.random() * 10));


// Задание 6

function getRandomArrNumbers(num) {
  let array = [];
  let halfArray = Math.floor(num / 2);
  for (let i = 0; i < halfArray; i++) {
      array.push(Math.ceil(Math.random() * num));
  }
  return array;
};

console.log(getRandomArrNumbers(9));

//getRandomArrNumbers(7); 
// [6, 2, 7] - массив заполнен случайными числами
// от 0 до 7, длина массива 7 / 2 = 3.5, округляем до ближайшего меньшего
// числа, получаем 3
//getRandomArrNumbers(12); 
// [9, 11, 10, 9, 3, 0] - массив заполнен случайными числами
// от 0 до 12, длина массива 12 / 2 = 6

/*
// Задание 7

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min+1)) + min
}
console.log(getRandomInt(1, 10));


// Задание 8

let currentDate = new Date();
console.log(currentDate);


// Задание 9

let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);



// Задание 10
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

let myDate = new Date();
let fullDate = "Сегодня: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + ", " + days[myDate.getDay()] + ", Время: " 
+ myDate.getHours() + "ч " + myDate.getMinutes() + "м " + myDate.getSeconds() + "с "; 
console.log(fullDate);

*/