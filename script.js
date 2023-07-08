//тут тоже нужна помощь не выводит =/

function monthNumber() {
    let userAnswe = prompt(`Введите номер месяца`, '1 - 12');
    if (!Number.isNaN(userAnswe)) {
        return 'Неправильное число попробуйте еще раз';
    }
    if (userAnswe === 12 || (userAnswe >=1 && userAnswe <=3)) {
        season = 'Зима';
    } else if (userAnswe >=4 && userAnswe <=6) {
        season = 'Весна';
    }  else if (userAnswe >=7 && userAnswe <=9) {
        season = 'Лето';
    }  else if (userAnswe >=10 && userAnswe <=12) {
        season = 'Осень';
    }
    return season;
}
















