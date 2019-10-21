'use strict';
/**
 * 1)
 */
    let lang,
        arr,
        select = document.getElementById('lang'),
        ruWeek = 'Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье',
        enWeek = 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday';

    select.addEventListener('change', () => {
        lang = select.options[select.selectedIndex].value;

        // if

        if(lang === 'ru'){
            console.log(ruWeek.split(', '));
        } else{
            console.log(enWeek.split(', '));
        }

        // switch-case

        switch(lang){
            case 'ru': console.log(ruWeek.split(', ')); break;
            case 'en': console.log(enWeek.split(', ')); break;
        }

        // array

        arr = [ [ 'ru', [ruWeek.split(', ')] ], [ 'en', [enWeek.split(', ')] ] ];
        lang === 'ru' ? console.log(arr[0]) : console.log(arr[1]);
    });

/**
 * 2)
 */

let namePerson = prompt('Как Вас зовут?'),
    role;

role = namePerson === 'Артем' ? 'Директор'
        :namePerson === 'Максим' ? 'Преподаватель'
        :'Студент';

console.log(role);