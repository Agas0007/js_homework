'use strict';

/**
 * Вариант без проверки пользовательского ввода
 */

let money = prompt('Ваш ежемесячный доход?', 15000),
    income = 'freelance',
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Такси, Кино, Игры'),
    monthlyRequiredCosts_1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Общественный транспорт, интернет'),
    amountOfExpenses_1 = prompt('Во сколько это обойдется?', 3455),
    monthlyRequiredCosts_2 = prompt('Какие ещё обязательные ежемесячные расходы у вас есть?', 'Кредит'),
    amountOfExpenses_2 = prompt('Во сколько это обойдется?', 7938),
    deposit = prompt('Есть ли у вас депозит в банке?', 'Нет'),
    mission = 300000,
    budgetMonth = +money - (+amountOfExpenses_1) - (+amountOfExpenses_2),
    budgetDay = Math.floor(+budgetMonth/30),
    period = Math.ceil(mission/budgetMonth);


if(deposit === 'Нет' || deposit === 'No'){
    console.log(!deposit);
} 
else if(deposit === 'Да' || deposit === 'Yes')
{
    console.log(!!deposit);
    
} else
{
    console.log('Для ответа на вопрос "Есть ли у вас депозит в банке?" необходимо использовать ответ "Да" или "Нет"');
}

console.log(addExpenses.split(','));

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log(budgetMonth);
console.log(period);
console.log(budgetDay);

switch(true){
    case budgetDay > 800:
        console.log('Высокий уровень дохода');
    break;
    case budgetDay >= 300 && budgetDay < 800:
        console.log('Средний уровень дохода');
    break;
    case budgetDay >= 0 && budgetDay < 300:
        console.log('Низкий уровень дохода');
    break;
    case budgetDay < 0:
        console.log('Что то пошло не так');
    break;
}

let showTypeOf = function(data){
    console.log(data, typeof(data));
}

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let getStatusIncome = function(){
    if(budgetDay < 300){
        return ('Высокий уровень дохода');
    } else if(budgetDay <= 800){
        return ('Средний уровень дохода');
    } else {
        return ('Низкий уровень дохода');
    }
}

function getExpensesMonth(amountOfExpenses_1, amountOfExpenses_2){
    return +amountOfExpenses_1 + +amountOfExpenses_2;
}

console.log(getExpensesMonth(amountOfExpenses_1, amountOfExpenses_2));

let accumulatedMonth;

function getAccumulatedMonth(money, amountOfExpenses_1, amountOfExpenses_2){
    accumulatedMonth = +money - (+amountOfExpenses_1) - (+amountOfExpenses_2);
    return accumulatedMonth;
}
getAccumulatedMonth(money, amountOfExpenses_1, amountOfExpenses_2);
console.log(accumulatedMonth);

function getTargetMonth(mission, accumulatedMonth){
    return (mission/accumulatedMonth);
}


console.clear();

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log(getStatusIncome());
console.log(period*accumulatedMonth);
console.log(Math.floor(getTargetMonth(mission,accumulatedMonth)));


/**
 * Вариант с проверкой пользовательского ввода
 */

// let money = prompt('Ваш ежемесячный доход?'),
//     income = 'freelance',
//     addExpenses,
//     monthlyRequiredCosts_1,
//     amountOfExpenses_1,
//     monthlyRequiredCosts_2,
//     amountOfExpenses_2,
//     deposit,
//     mission = 300000,
//     budgetMonth,
//     budgetDay,
//     period,
//     eror = 'Данные введены некорректно! Необходимо указать число';

// if(!isNaN(parseFloat(money)) && isFinite(money)){
//     addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
//     monthlyRequiredCosts_1 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
//     amountOfExpenses_1 = prompt('Во сколько это обойдется?');

//     if(!isNaN(parseFloat(amountOfExpenses_1)) && isFinite(amountOfExpenses_1)){
//         monthlyRequiredCosts_2 = prompt('Какие ещё обязательные ежемесячные расходы у вас есть?');
//         amountOfExpenses_2 = prompt('Во сколько это обойдется?');

//         if(!isNaN(parseFloat(amountOfExpenses_2)) && isFinite(amountOfExpenses_2)){
//             deposit = prompt('Есть ли у вас депозит в банке?');

//             if(deposit === 'Нет' || deposit === 'No'){
//                 console.log(!deposit);
//             } 
//             else if(deposit === 'Да' || deposit === 'Yes')
//             {
//                 console.log(!!deposit);
//             } else
//             {
//                 console.log('Для ответа на вопрос "Есть ли у вас депозит в банке?" необходимо использовать ответ "Да" или "Нет"');
//             }

//             console.log(typeof money);
//             console.log(typeof income);
//             console.log(typeof deposit);

//             budgetMonth = +money - (+amountOfExpenses_1) - (+amountOfExpenses_2);
//             budgetDay = Math.floor(+budgetMonth/30);
//             period = Math.ceil(mission/budgetMonth);

//             console.log(budgetMonth);
//             console.log(period);
//             console.log(budgetDay);

//             switch(true){
//                 case budgetDay > 800:
//                     console.log('Высокий уровень дохода!');
//                 break;
//                 case budgetDay >= 300 && budgetDay < 800:
//                     console.log('Средний уровень дохода');
//                 break;
//                 case budgetDay >= 0 && budgetDay < 300:
//                     console.log('Низкий уровень дохода');
//                 break;
//                 case budgetDay < 0:
//                     console.log('Что то пошло не так');
//                 break;
//             }

//         } else{
//             console.log(error);
//         }
//     } else{
//         console.log(error);
//     }
// } else{
//     console.log(error);
// }

// console.log(addExpenses.split(','));