'use strict';

let start = document.getElementById('start'),
    btnsPlus1 = document.getElementsByTagName('button')[0],
    btnsPlus2 = document.getElementsByTagName('button')[1],
    checkbox = document.querySelector('#deposit-check'),
    additionalIncomeItems = document.querySelectorAll('.additional_income-item'),
    inputBudgetMonth = document.getElementsByClassName('budget_month-value')[0],
    inputBudgetDay = document.getElementsByClassName('budget_day-value')[0],
    inputExpensesMoth = document.getElementsByClassName('expenses_month-value')[0],
    inputAdditionalIncome = document.getElementsByClassName('additional_income-value')[0],
    inputAdditionalExpenses = document.getElementsByClassName('additional_expenses-value')[0],
    inputIncomePeriod = document.getElementsByClassName('income_period-value')[0],
    inputTargetMoth = document.getElementsByClassName('target_month-value')[0],
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('input[class="income-title"'),
    inputExpensesTitle = document.querySelector('input[class="expenses-title"'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),
    periodSelect = document.querySelector('.period-select'),
    incomeItems = document.querySelectorAll('.income-items'),
    periodAmount = document.querySelector('.period-amount'),
    data = document.querySelector('.data'),
    dataInputsAndBtns = data.querySelectorAll('input, button'),
    cancel = document.getElementById('cancel');

let isMatch = function(data) {
    let regexp = /\d/gi;

    if (data.match(regexp) !== null) {
        return false;
    } else {
        return true;
    }
};

let appData = {
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    income: {},
    addIncome: [],
    incomeMonth: 0,
    expenses: {},
    addExpenses: [],
    expensesMonth: 0,
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    start: function() {

        if (salaryAmount.value === '') {
            return alert('Error: Поле "Месячный доход" должно быть заполнено');
        }

        appData.budget = +salaryAmount.value;
        appData.getExpenses();
        appData.getIcnome();
        appData.getExpensesMonth();
        appData.getAddExpenses();
        appData.getAddIncome();
        appData.getBudget();

        appData.showResults();
    },
    showResults: function() {
        inputBudgetMonth.value = appData.budgetMonth;
        inputBudgetDay.value = Math.floor(appData.budgetDay);
        inputExpensesMoth.value = appData.expensesMonth;
        inputAdditionalExpenses.value = appData.addExpenses.join(', ');
        inputAdditionalIncome.value = appData.addIncome.join(', ');
        inputTargetMoth.value = Math.ceil(appData.getTargetMonth());
        inputIncomePeriod.value = appData.calcPeriod();
        periodSelect.addEventListener('input', function() {
            inputIncomePeriod.value = appData.calcPeriod();
        });
    },
    addExpensesBlock: function() {
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, btnsPlus2);
        expensesItems = document.querySelectorAll('.expenses-items');

        if (expensesItems.length == 3) {
            btnsPlus2.style.display = 'none';
        }
    },
    getExpenses: function() {
        expensesItems.forEach(function(item) {
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;

            if (itemExpenses !== '' && cashExpenses !== '') {
                appData.expenses[itemExpenses] = +cashExpenses;
            }
        });
    },
    getAddExpenses: function() {
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item) {
            item = item.trim();
            if (item !== '') {
                appData.addExpenses.push(item);
            }
        });
    },
    getExpensesMonth: function() {
        for (let item in appData.expenses) {
            appData.expensesMonth += +appData.expenses[item];
        }
    },
    addIncomeBlock: function() {
        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, btnsPlus1);
        incomeItems = document.querySelectorAll('.income-items');

        if (incomeItems.length === 3) {
            btnsPlus1.style.display = 'none';
        }
    },
    getIcnome: function() {
        incomeItems.forEach(function(item) {
            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;
            if (itemIncome !== '' && cashIncome !== '') {
                appData.income[itemIncome] = +cashIncome;
                for (let key in appData.income) {
                    appData.incomeMonth += +appData.income[key];
                }
            }
        });
    },
    getAddIncome: function() {
        additionalIncomeItems.forEach(function(item) {
            let itemValue = item.value.trim();
            if (itemValue !== '') {
                appData.addIncome.push(itemValue);
            }
        });
    },
    getBudget: function() {
        appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
        appData.budgetDay = appData.budgetMonth / 30;
    },
    getTargetMonth: function() {
        return targetAmount.value / appData.budgetMonth;
    },
    getStatusIncome: function() {
        if (appData.budgetDay >= 800) {
            return ('Высокий уровень дохода');
        } else if (appData.budgetDay >= 300) {
            return ('Средний уровень дохода');
        } else if (appData.budgetDay > 0) {
            return ('Низний уровень дохода');
        } else {
            return ('Что-то пошло не так!');
        }
    },
    getInfoDeposit: function() {
        if (appData.deposit) {

            do {
                appData.percentDeposit = +prompt('Какой годовой процент?', 10);
            } while (isNaN(appData.percentDeposit) ||
                appData.percentDeposit === '' ||
                appData.percentDeposit === null ||
                appData.percentDeposit === 0);

            do {
                appData.moneyDeposit = +prompt('Какая сумма заложена?', 10000);
            } while (isNaN(appData.moneyDeposit) ||
                appData.moneyDeposit === '' ||
                appData.moneyDeposit === null ||
                appData.moneyDeposit === 0);
        }
    },
    periodSelect: function() {
        periodAmount.innerHTML = periodSelect.value;
    },
    calcPeriod: function() {
        return appData.budgetMonth * periodSelect.value;
    },
    stop: function() {
        start.style.display = 'none';
        cancel.style.display = 'block';
        dataInputsAndBtns = data.querySelectorAll('input, button');
        dataInputsAndBtns.forEach(function(item) {
            item.setAttribute('disabled', 'disabled');
        });
        periodSelect.removeAttribute('disabled');
    },
    checkSalaryAmount: function() {
        if (salaryAmount.value == '') {
            start.setAttribute('disabled', 'disabled');
        } else {
            start.removeAttribute('disabled');
        }
    }
};

appData.checkSalaryAmount();
salaryAmount.addEventListener('input', appData.checkSalaryAmount);
start.addEventListener('mouseover', appData.isEmptySalaryAmount);
start.addEventListener('click', appData.start);
start.addEventListener('click', appData.stop);
btnsPlus1.addEventListener('click', appData.addIncomeBlock);
btnsPlus2.addEventListener('click', appData.addExpensesBlock);
periodSelect.addEventListener('input', appData.periodSelect);

// appData.addExpenses = appData.addExpenses.map((item) => item[0].toUpperCase() + item.slice(1).toLowerCase());
// console.log(String(appData.addExpenses.join(',')));