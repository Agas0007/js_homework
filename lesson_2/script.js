'use strict';

let money = 33800,
    income = 'freelance',
    addExpenses = 'Games, Cinema, Taxi',
    deposit = false,
    mission = 300000,
    period = 8;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(income.length);
console.log('Цель: заработать ' + mission + ' рублей за ' + period + ' месяцев');
console.log(addExpenses.toLowerCase().split(', '));

let budgetDay = money/30;

console.log(budgetDay);
console.log(money%30);