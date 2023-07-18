

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


















