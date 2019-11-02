'use strict';

function clock(){
    let date = new Date(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds(),
    day = date.getDate(),
    mounth = date.getMonth()+1,
    year = date.getFullYear();

    if(hours <= 9) { minutes = '0' + hours; }
    if(minutes <= 9) { minutes = '0' + minutes; }
    if(seconds <= 9) { seconds = '0' + seconds; }
    if(day <= 9) { day = '0' + day; }
    if(mounth <= 9) { mounth = '0' + mounth; }

    let dateTime = hours+':'+minutes+':'+seconds+' '+day+'.'+mounth+'.'+year;
    document.querySelector('div').innerHTML = dateTime;
    setTimeout(clock, 1000);
}
clock();