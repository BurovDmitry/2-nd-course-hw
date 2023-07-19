

function monthNumber() {
    let userAnswe = prompt(`Введите номер месяца`, '1 - 12');
    if (isNaN(userAnswe)) {
        alert('Неправильное число попробуйте еще раз');
    }
    if (userAnswe === 12 || (userAnswe >=1 && userAnswe <=2)) {
        season = 'Зима';
    } else if (userAnswe >=3 && userAnswe <=5) {
        season = 'Весна';
    }  else if (userAnswe >=6 && userAnswe <=8) {
        season = 'Лето';
    }  else if (userAnswe >=9 && userAnswe <=11) {
        season = 'Осень';
    }
    alert(season);
}



function memorizeWords() {
    let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    fruits = fruits.sort(() => Math.random() - 0.5);
    const fruitsText = fruits.join(', ');
    alert(fruitsText);
    //console.log(fruitsText);

    const userAnswer = prompt('Чему равен первый элемент массива?').toLowerCase(); 
    const userAnswer2 = prompt('Чему равнялся последний элемент массива?').toLowerCase();
    const fruitsCheck = fruits.map(value => value.toLowerCase());
    const lastIndex = fruits.length - 1;

     if (fruitsCheck[0] === userAnswer && fruitsCheck[lastIndex] === userAnswer2) {
         alert('Поздравить пользователя, если он угадал оба элемента');

     } else {
         if (fruitsCheck[0] === userAnswer || fruitsCheck[lastIndex] === userAnswer2) {
             alert('Вы были близки к победе!'); 

         } else {
             alert('Вы ответили неверно');
         }
     }
}



//.toUpperCase()
//.toLowerCase











