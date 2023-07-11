// Задание 1

let i = 1;
while (i <= 2) {
    console.log('№1 Привет!');
    i++;
}

// Задание 2

let a = 1;
while (a <= 5) {
    console.log ( a );
    a++;
}

// Задание 3

for (let b=7; b <= 22; b++) {
    console.log (b)
}

// Задание 4

const obj = {
    'Коля': 200,
    'Вася': 300,
    'Петя': 400,
}

for (let many in obj) {
    console.log (`${many} — зарплата ${obj[many]} долларов`);
}

// Задание 5

for (let n = 1000, num = 1; n > 50; num++) {
    n /= 2;
    console.log (n);
    console.log (num);
}

// Задание 6

for (let dayNumber = 5; dayNumber < 31; dayNumber += 7) {
        console.log (`Сегодня пятница ${dayNumber}-е число. Необходимо подготовить отчет`);
        continue;
}