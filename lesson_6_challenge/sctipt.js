'use strict';

let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    date = new Date(),
    div = document.querySelector('div');

function logArrayElements(element, index) {
    let day;
    if(index + 1 === date.getDay()){
        day = '<p><b>' + element + '</b></p>';
    } else if(index + 1 === 6 || index + 1 === 7){
        day = '<p><em>' + element + '</em></p>';
    } else{
        day = '<p>' + element + '</p>';
    }
    div.innerHTML += day;
}

week.forEach(logArrayElements);