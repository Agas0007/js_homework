'use strict';

let money,
    income = 'freelance',
    addExpenses = prompt('Перичислите возможные расходы через запятую'),
    deposit = prompt('Есть ли у Вас депозит в банке?'),
    mission = 300000,
    period = 8;

// let start = function(){
//     money = prompt('Ваш ежемесячный доход?', 33800);

//     while(isNaN(money) || money === '', money === null){
//         money = prompt('Ваш ежемесячный доход?', 33800);
//         console.log('money: ', money);
//     }
// }

let start = function(){
    do{
        money = prompt('Ваш ежемесячный доход?', 33800);
        console.log('money: ', money);
    } while(isNaN(money) || money.trim() === '' || money === null);
}

start();

    let showTypeOf = function(data){
        console.log(data, typeof(data));
    }
    
    // showTypeOf(money);
    // showTypeOf(income);
    // showTypeOf(deposit);

let monthlyRequiredCosts_1,
    monthlyRequiredCosts_2;

let getExpensesMonth = function(){
    let sum = 0;

    for(let i = 0; i < 2; i++){
        if(i === 0 )
            monthlyRequiredCosts_1 = prompt('Введите обязательную статью расходов', 'Оплата съемной квартиры');
        if(i === 1)
            monthlyRequiredCosts_1 = prompt('Введите обязательную статью расходов', 'Интернет');

        sum += +prompt('Во сколько это обойдётся?', 2500);

        while(isNaN(sum) || sum == '' || sum == null) {
            getExpensesMonth();
        }
    }

    return sum;
}


let expensesAmmount = getExpensesMonth();
console.log('Расходы в месяц: ' + expensesAmmount);


let getAccumulatedMonth = function(){
    return money - expensesAmmount;
}

console.log('Накопления за месяц: ' + getAccumulatedMonth());


let getTargetMonth = function(){
    return mission / getAccumulatedMonth();
}

let budgetDay = getAccumulatedMonth()/30;

(getTargetMonth() < 0) ? console.log('Цель не будет достигнута') : console.log('Цель будет достигнута за ' + Math.ceil(getTargetMonth()) + ' месяца(ев)');


let getStatusIncome = function(){
    if(budgetDay < 0){
        return ('Что-то пошло не так');
    }
    else if(budgetDay < 300){
        return ('Низкий уровень дохода');
    } else if(budgetDay <= 800){
        return ('Средний уровень дохода');
    } else {
        return ('Высокий уровень дохода');
    }
}

console.log(getStatusIncome());
