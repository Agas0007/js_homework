'use strict';

const timesOfDay = document.querySelector('#times-of-day'),
    today = document.querySelector('#today'),
    currentTime = document.querySelector('#current-time'),
    newYear = document.querySelector('#new-year'),
    week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

    function getTimeRemaining() {
        let date = new Date(),
            dateStop = new Date(`January 1, 2020`).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000,
            seconds = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60) % 60),
            hours = Math.floor(timeRemaining / 60 / 60),
            day = Math.floor(timeRemaining / 60 / 60 / 24),
            timeToString = date.toLocaleTimeString('en');            

        if (hours <= 9) {
            hours = '0' + hours;
        }
        if (minutes <= 9) {
            minutes = '0' + minutes;
        }
        if (seconds <= 9) {
            seconds = '0' + seconds;
        }

        return {
            timeRemaining,
            hours,
            minutes,
            seconds,
            timeToString,
            day,
            date,
        };
    }

function output(){
    let timer = getTimeRemaining();

    if (timer.hours >= 0 && timer.hours <= 6) {
        timesOfDay.textContent = `Доброй ночи!`;
    } else if (timer.hours >= 6 && timer.hours < 12) {
        timesOfDay.textContent = `Доброе утро!`;
    } else if (timer.hours <= 18) {
        timesOfDay.textContent = `Добрый день!`;
    } else if (timer.hours >= 18) {
        timesOfDay.textContent = `Добрый вечер!`;
    }

    today.textContent = 'Сегодня: ' + week[timer.date.getDay()];

    function currentDateAndTime(){
        let timer = getTimeRemaining();
        currentTime.textContent = `Текущее время: ${timer.timeToString}`;
        setInterval(currentDateAndTime, 1000);    
    }
    currentDateAndTime();

    if(timer.timeRemaining > 0){
        newYear.textContent = `До Нового года осталось ${timer.day} дней`;
    } else{
        newYear.textContent = '';
    }    
    
}

output();