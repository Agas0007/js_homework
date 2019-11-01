'use strict';

let getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

let start = getRandomInt(1, 3);
let num;

function question() {
    do {
        num = +prompt('Угадай число');
        if (isNaN(num)) {
            alert('введите число!');
        }
    } while (isNaN(num));
}


if (num < start) {
    alert('Больше!');
    question();
} else if (num > start) {
    alert('Меньше!');
    question();
} else {
    alert('Поздравляю вы угадали!!!');
    let yet = confirm('Хотите сыграть еще?');
    if (yet === true) {
        window.location.reload();
    }
}