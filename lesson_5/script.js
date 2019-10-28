'use strict';

let money,
    income = 'freelance',
    mission = 300000,
    period = 8;

// let start = function(){
//     money = prompt('Ваш ежемесячный доход?', 33800);

//     while(isNaN(money) || money === '', money === null){
//         money = prompt('Ваш ежемесячный доход?', 33800);
//         console.log('money: ', money);
//     }
// }

const valid = function (data) {
    return (isNaN(data) || data === '' || data === null) ? false : data;
};

let validExpenses = function(data){
    let result;
    if(isNaN(data)){
        result = prompt('Данные указаны некорректно, пожалуйста, укажите число!');
        validExpenses(result);
    } else{
        result = data;
    }
    return Number(result);
};

let start = function () {
    do {
        money = prompt('Ваш ежемесячный доход?', 33800);
    } while (valid(money) === false);
};

start();

let showTypeOf = function (data) {
    console.log(data, typeof (data));
};

let addExpenses = prompt('Перичислите возможные расходы через запятую'),
    deposit = confirm('Есть ли у Вас депозит в банке?');

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let monthlyRequiredCosts1,
    monthlyRequiredCosts2;

let getExpensesMonth = function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            monthlyRequiredCosts1 = prompt('Введите обязательную статью расходов', 'Оплата съемной квартиры');
        }
        if (i === 1) {
            monthlyRequiredCosts2 = prompt('Введите обязательную статью расходов', 'Интернет');
        }

        sum += +prompt('Во сколько это обойдётся?', 2500);
        sum = validExpenses(sum);
    }

    return sum;

};


let expensesAmmount = getExpensesMonth();
console.log('Расходы в месяц: ' + valid(expensesAmmount));


let getAccumulatedMonth = function () {
    return money - expensesAmmount;
};

console.log('Накопления за месяц: ' + getAccumulatedMonth());


let getTargetMonth = function () {
    return mission / getAccumulatedMonth();
};

let budgetDay = getAccumulatedMonth() / 30;


if (getTargetMonth() < 0) {
    console.log('Цель не будет достигнута');
} else {
    console.log('Цель будет достигнута за ' + Math.ceil(getTargetMonth()) + ' месяца(ев)');
}


let getStatusIncome = function () {
    if (budgetDay < 300) {
        return ('Низкий уровень дохода');
    } else if (budgetDay <= 800) {
        return ('Средний уровень дохода');
    } else {
        return ('Высокий уровень дохода');
    }
};

console.log(getStatusIncome());