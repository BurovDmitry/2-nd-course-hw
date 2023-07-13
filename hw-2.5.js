// Задание 1

function min(a, b) {

    if (a <= b) {
        return a;
    } else { 
        return b    
    }
};

console.log(min(8, 4));


// Задание 2

const evenOdd = (n) => {

    if (n % 2 == 0) {
        return '№2 Чет';
    } else {
        return '№2 нечет';
    }
};

console.log(evenOdd(102));



// Задание 3

function square (c) {
    return c ** 2;
}

let sq = square(5);

console.log (`№3 - ${sq}`);



// Задание 4

let age = prompt("№4 Сколько Вам лет?", 12);

let printMessage;

if (age <=0) {
    
    printMessage = function () {
        console.log("№4 Вы ввели неправильное значение");
    }

} else {

    if (age <= 12) {

        printMessage = function () {
            console.log("№4 Привет, друг!");
        }
    
    } else {
    
        printMessage = function () {
            console.log("№4 Добро пожаловать!");
        }
    
    }
    
}

printMessage();

// Задание 5


const check = (m, v) => {

    if (isNaN(m) || isNaN(v)) {
        return '№5 Одно или оба значения не являются числом'

    } else {
        return `№5 - ${ m * v }`
    }
};

console.log(check(4, 7)); 


// Задание 6

let n = Number(prompt("№6 Напишите число"));

const nM = (n) => {

    if (isNaN(n)) {
        return '№6 Переданный параметр не является числом';

    } else {
        return `№6 n в кубе равняется ${n ** 3}`;
    }
}

console.log(nM(n));



// Задание 7

function getArea() {
    return this.radius ** 2 * 3.14;
  }
  function getPerimeter() {
    return this.radius * 2 * 3.14;
  }

  const square1 = {
    radius: 2,
    gA: getArea,
    gP: getPerimeter,
  };

  const square2 = {
    radius: 4,
    gA: getArea,
    gP: getPerimeter,
  };

  console.log(square1.gA());
  console.log(square1.gP());
  console.log(square2.gA());
  console.log(square2.gP());