

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
    fruits = fruits.join(', ');
    alert(fruits)

    let userQuestions1 = prompt('Чему равен первый элемент массива?');
    let userQuestions2 = prompt('Чему равнялся последний элемент массива?')

     if (fruits.toUpperCase()[0] && fruits.toUpperCase()[-1] == userQuestions1.toUpperCase() && userQuestions2.toUpperCase()) {
         alert('Поздравить пользователя, если он угадал оба элемента')

     } else {
         if (fruits.toUpperCase()[0] || fruits.toUpperCase()[-1] == userQuestions1.toUpperCase() || userQuestions2.toUpperCase()) {
             alert('Вы были близки к победе!') 

         } else {
             alert('Вы ответили неверно')
         }
     }
}

















