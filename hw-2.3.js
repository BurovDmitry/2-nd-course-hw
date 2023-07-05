// Задание 1

let password = String(prompt(`Введите пароль (12345)`));
if (password === '12345') {
    console.log('№1 Пароль введен верно');
} else {
    console.log('№1 Пароль введен неправильно');
}

// Задание 2

let c = 4
if (c >= 0 && c <=10) {
    console.log('№2 Верно')
} else {
    console.log('№2 Неверно')
 }

// Задание 3

let d = 2;
let e = 101;
if (d >=100 || e >=100) {
    console.log('№3 Верно')
} else {
    console.log('№3 Неверно')
}

// Задание 4

let a = '2';
let b = '3';
a = Number(a);
b = Number(b);
alert (a + b);

// Задание 5

let monthNumber = String(prompt(`Введите номер месяца`));

switch (monthNumber) {
    case '12':
    case '1':
    case '2':    
        console.log('№4 Зима')
        break;
    case '3':
    case '4':
    case '5':
        console.log('№4 Весна')
        break;
    case '6':
    case '7':
    case '8':
        console.log('№4 Лето')
        break;
    case '9':
    case '10':
    case '11':
        console.log('№4 Осень')
        break;
    default:
        console.log('№4 Месяцев всего 12!!!')
        break;
}

// Задание 7

let numeric = Number(prompt(`Пожалуйста, введите любое число`));
if (!isNaN(numeric)) {
    if (numeric % 2 === 0) {
        alert ('№7 Число четное');
    }  else {
        alert ('№7 Число не четное');
    }
} else {
    console.log('NaN');
}

// Задание 8

let clientOS = 0

if (clientOS = 0) {
    alert ('№8 Установите версию приложения для iOS по ссылке');
} else {
    alert ('№8 Установите версию приложения для Android по ссылке');
} 

// Задание 9

let v = Number(prompt(`Пожалуйста введите год выпуска операцийонной системы`))
let clientDeviceYear = 2015;
let client = 0;
if (clientDeviceYear <= v) {
    if (client) {
        alert ('№9 Установите версию приложения для iOS по ссылке');
    } else {
        alert ('№9 Установите версию приложения для Android по ссылке');
    }
} else {
    if (client) {
        alert ('№9 Установите облегченную версию приложения для iOS по ссылке'); 
    } else {
        alert ('№9 Установите облегченную версию приложения для Android по ссылке'); 
    }
}

