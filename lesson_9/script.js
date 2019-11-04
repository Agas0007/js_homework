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
    cancel = document.getElementById('cancel'),
    amountItems = document.querySelectorAll('input[class$="-amount"]'),
    titleItems = document.querySelectorAll('input[placeholder$="Наименование"]');

let appData;
appData = {
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
    start: function () {
        // if (salaryAmount.value === '') {
        //     return alert('Error: Поле "Месячный доход" должно быть заполнено');
        // }
        this.budget = +salaryAmount.value;
        this.getExpenses();
        this.getIcnome();
        this.getAddExpenses();
        this.getExpensesMonth();
        this.getBudget();
        this.getAddIncome();
        this.getReset();
        this.getCancel();
        this.showResults();
    },
    showResults: function () {
        inputBudgetMonth.value = this.budgetMonth;
        inputBudgetDay.value = Math.floor(this.budgetDay);
        inputExpensesMoth.value = this.expensesMonth;
        inputAdditionalExpenses.value = this.addExpenses.join(', ');
        inputAdditionalIncome.value = this.addIncome.join(', ');
        inputTargetMoth.value = Math.ceil(this.getTargetMonth());
        inputIncomePeriod.value = this.calcPeriod();
        periodSelect.addEventListener('input', function () {
            inputIncomePeriod.value = appData.calcPeriod();
        });
    },
    addExpensesBlock: function () {
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        let expensesChildren = cloneExpensesItem.querySelectorAll('*');

        for (let i = 0; i < expensesChildren.length; i++) {
            expensesChildren[i].value = null;
        }

        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, btnsPlus2);
        expensesItems = document.querySelectorAll('.expenses-items');

        if (expensesItems.length == 3) {
            btnsPlus2.style.display = 'none';
        }

        let itemExpensesTitle = document.querySelectorAll('.expenses-title');
        itemExpensesTitle.forEach(function (item) {
            item.addEventListener('focus', appData.inputTextValidation);
        });
        let intemExpensesAmount = document.querySelectorAll('.expenses-amount');
        intemExpensesAmount.forEach(function (item) {
            item.addEventListener('focus', appData.intputNumValidation);
        });
    },
    getExpenses: function () {
        expensesItems.forEach(function (item) {
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;

            if (itemExpenses !== '' && cashExpenses !== '') {
                appData.expenses[itemExpenses] = +cashExpenses;
            }
        });
    },
    getAddExpenses: function () {
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function (item) {
            item = item.trim();
            if (item !== '') {
                appData.addExpenses.push(item);
            }
        });
    },
    getExpensesMonth: function () {
        for (let item in this.expenses) {
            this.expensesMonth += +this.expenses[item];
        }
    },
    addIncomeBlock: function () {
        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        let incomeChildren = cloneIncomeItem.querySelectorAll('*');

        for (let i = 0; i < incomeChildren.length; i++) {
            incomeChildren[i].value = null;
        }

        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, btnsPlus1);
        incomeItems = document.querySelectorAll('.income-items');

        if (incomeItems.length === 3) {
            btnsPlus1.style.display = 'none';
        }

        let itemIncomeTitle = document.querySelectorAll('.income-title');
        itemIncomeTitle.forEach(function (item) {
            item.addEventListener('focus', appData.inputTextValidation);
        });
        let intemIncomeAmount = document.querySelectorAll('.income-amount');
        intemIncomeAmount.forEach(function (item) {
            item.addEventListener('focus', appData.intputNumValidation);
        });
    },
    getIcnome: function () {
        incomeItems.forEach(function (item) {
            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;

            if (itemIncome !== '' && cashIncome !== '') {
                appData.income[itemIncome] = +cashIncome;
            }
        });
        for (let key in this.income) {
            this.incomeMonth += +this.income[key];
        }

    },
    getAddIncome: function () {
        additionalIncomeItems.forEach(function (item) {
            let itemValue = item.value.trim();
            if (itemValue !== '') {
                appData.addIncome.push(itemValue);
            }
        });
    },
    getBudget: function () {
        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
        this.budgetDay = this.budgetMonth / 30;
    },
    getTargetMonth: function () {
        return targetAmount.value / this.budgetMonth;
    },
    getStatusIncome: function () {
        if (this.budgetDay >= 800) {
            return ('Высокий уровень дохода');
        } else if (this.budgetDay >= 300) {
            return ('Средний уровень дохода');
        } else if (this.budgetDay > 0) {
            return ('Низний уровень дохода');
        } else {
            return ('Что-то пошло не так!');
        }
    },
    getInfoDeposit: function () {
        if (this.deposit) {

            do {
                appData.percentDeposit = +prompt('Какой годовой процент?', 10);
            } while (isNaN(this.percentDeposit) ||
            this.percentDeposit === '' ||
            this.percentDeposit === null ||
            this.percentDeposit === 0);

            do {
                this.moneyDeposit = +prompt('Какая сумма заложена?', 10000);
            } while (isNaN(this.moneyDeposit) ||
            this.moneyDeposit === '' ||
            this.moneyDeposit === null ||
            this.moneyDeposit === 0);
        }
    },
    periodSelect: function () {
        periodAmount.innerHTML = periodSelect.value;
    },
    calcPeriod: function () {
        return this.budgetMonth * periodSelect.value;
    },
    getReset: function(){
        start.style.display = 'none';
        cancel.style.display = 'block';
    },
    getCancel: function(){
        let dataChildren = data.querySelectorAll('*');

        for(let i = 0; i < dataChildren.length; i++){
            if(dataChildren[i].type == 'text' ||
             dataChildren[i].type == 'submit' || 
             dataChildren[i].type == 'checkbox'){
                dataChildren[i].setAttribute('disabled', '');
            }
        }
    },
    checkSalaryAmount: function () {
        if (salaryAmount.value == '') {
            start.setAttribute('disabled', 'disabled');
            start.style.pointerEvents = 'none';
        } else {
            start.removeAttribute('disabled');
            start.style.pointerEvents = null;
        }
    },
    inputAmountListener: function () {
        amountItems.forEach(function (item) {
            item.addEventListener('focus', appData.intputNumValidation);
        });
    },
    intputNumValidation: function (event) {
        let input = event.target,
            value = input.value;

        input.addEventListener('input', onInput);

        function onInput(event) {
            var newValue = event.target.value;
            if (newValue.match(/[^0-9]/g)) {
                input.value = value;
                return;
            }
            value = newValue;
        }
    },
    inputTitleListener: function () {
        titleItems.forEach(function (input) {
            input.addEventListener('focus', appData.inputTextValidation);
        });
    },
    inputTextValidation: function (event) {
        let input = event.target,
            value = input.value;

        input.addEventListener('input', onInput);

        function onInput(event) {
            var newValue = event.target.value;
            if (newValue.match(/[^а-яА-Я, ]/g)) {
                input.value = value;
                return;
            }
            value = newValue;
        }
    },
    fullReset: function(){
        appData.budget = 0;
        appData.budgetDay = 0;
        appData.budgetMonth = 0;
        appData.income = {};
        appData.addIncome = [];
        appData.incomeMonth = 0;
        appData.expenses = {};
        appData. addExpenses = [];
        appData.expensesMonth = 0;
        appData.deposit = false;
        appData.percentDeposit = 0;
        appData.moneyDeposit = 0;
        appData.preparation();
        let dataChildren = document.querySelectorAll('input, button');
        dataChildren.forEach(function(elem){
            elem.removeAttribute('disabled');
            elem.value = null;
        });
        let incomeChildren = document.querySelectorAll('.income-items');
        incomeChildren.forEach(element => {
            for(let i = incomeChildren.length; i > 1; i--){
                incomeChildren.parentNode.removeChild(element);
            }
        });
        
    },
    preparation: function(){
        appData.inputAmountListener();
        appData.inputTitleListener();
        appData.checkSalaryAmount();
        salaryAmount.addEventListener('input', appData.checkSalaryAmount);
        btnsPlus1.addEventListener('click', appData.addIncomeBlock);
        btnsPlus2.addEventListener('click', appData.addExpensesBlock);
        periodSelect.addEventListener('input', appData.periodSelect);
        start.addEventListener('click', appData.start.bind(appData));
        cancel.addEventListener('click', appData.fullReset);
    },
};
appData.preparation();
// start.addEventListener('click', appData.stop);
// appData.addExpenses = appData.addExpenses.map((item) => item[0].toUpperCase() + item.slice(1).toLowerCase());
// console.log(String(appData.addExpenses.join(',')));