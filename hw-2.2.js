//Задание 1
let a = 10;
alert(a);
let y = 20
a=y;
alert(y);

//Задание 2
let phone = 2007;
alert (`Год выпуска первого iPhone ${phone}`);

//Задание 3
let name = "Брендан Эйх";
alert(`Именя создателя языка JavaScript ${name}`);

//Задание 4
let c = 10;
let d = 2;
alert(`Сумма ${a + d}, Разность ${a - d}, Произведение ${a * d}, Частное ${a / d}`);

//Задание 5
let e = 2;
let result = e ** 5;
alert(result);

//Задание 6
let f = 9;
let b = 2;
alert(`Остаток ${f % b}`);

//Задание 7
let num = 1;
num =+ 5;
num =- 3;
num *= 7;
num /= 3;
num++
num--
alert(num);

//Задание 8

let age = Number(prompt(`Сколько вам лет? `));
alert(`Вам ${age} =)`)

//Задание 9
const user = {
    name: 'Дима',
    age: 34,
    isAdmin: true,
}

//9.1
user["city of residence"] = `Тюмень`;

//9.2
user.age = 18;

//9.3
delete user["city of residence"];

//9.4
let info = prompt("Какую информацию хотите узнать о пользователе?");
console.log(user[info]);
alert(user);

//Задание 10
let name10 = String(prompt(`Ваше имя?`));
alert(`Привет ${name10}!`)