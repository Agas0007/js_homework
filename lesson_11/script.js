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
    titleItems = document.querySelectorAll('input[placeholder$="Наименование"]'),
    depositCheck = document.querySelectorAll('#deposit-check')[0],
    inputs = document.querySelectorAll('input[type="text"]');

let AppData = function () {

    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.income = {};
    this.addIncome = [];
    this.incomeMonth = 0;
    this.expenses = {};
    this.addExpenses = [];
    this.expensesMonth = 0;
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
};

AppData.prototype.start = function () {
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
};

AppData.prototype.getCheckPlaceholder = function (item) {
    if (item.placeholder === 'Наименование' || item.placeholder === 'название') {
        item.addEventListener('input', function () {
            item.value = item.value.replace(/[^А-Яа-я\s.,]/, '');
        });
    }
    if (item.placeholder === 'Сумма') {
        item.addEventListener('input', function () {
            item.value = item.value.replace(/[^\d]/, '');
        });
    }
};

AppData.prototype.showResults = function () {
    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = Math.floor(this.budgetDay);
    expensesMonthValue.value = this.expensesMonth;
    additionalIncomeValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome.join(', ');
    targetMonthValue.value = Math.ceil(this.getTargetMonth());
    incomePeriodValue.value = this.calcPeriod();
    periodSelect.addEventListener('input', () => incomePeriodValue.value = this.calcPeriod());
};
AppData.prototype.addExpensesBlock = function () {
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    let expensesChildren = cloneExpensesItem.querySelectorAll('*');

    for (let i = 0; i < expensesChildren.length; i++) {
        expensesChildren[i].value = '';
    }

    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, btnsPlus2);
    expensesItems = document.querySelectorAll('.expenses-items');

    if (expensesItems.length == 3) {
        btnsPlus2.style.display = 'none';
    }

    expensesChildren.querySelectorAll('input').forEach(this.getCheckPlaceholder);
    // input.foreach(this.getCheckPlaceholder);
};
AppData.prototype.getExpenses = function () {
    let _this = this;
    expensesItems.forEach(function (item) {
        let itemExpenses = item.querySelector('.expenses-title').value;
        let cashExpenses = item.querySelector('.expenses-amount').value;

        if (itemExpenses !== '' && cashExpenses !== '') {
            _this.expenses[itemExpenses] = +cashExpenses;
        }
    });
};
AppData.prototype.getAddExpenses = function () {
    let _this = this;
    let addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach(function (item) {
        item = item.trim();
        if (item !== '') {
            _this.addExpenses.push(item);
        }
    });
};
AppData.prototype.getExpensesMonth = function () {
    for (let item in this.expenses) {
        this.expensesMonth += +this.expenses[item];
    }
};
AppData.prototype.addIncomeBlock = function () {
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

    incomeChildren.querySelectorAll('input').forEach(this.getCheckPlaceholder);
};
AppData.prototype.getIcnome = function () {
    let _this = this;
    incomeItems.forEach(function (item) {
        let itemIncome = item.querySelector('.income-title').value;
        let cashIncome = item.querySelector('.income-amount').value;

        if (itemIncome !== '' && cashIncome !== '') {
            _this.income[itemIncome] = +cashIncome;
        }
    });
    for (let key in this.income) {
        this.incomeMonth += +this.income[key];
    }

};
AppData.prototype.getAddIncome = function () {
    let _this = this;
    additionalIncomeItems.forEach(function (item) {
        let itemValue = item.value.trim();
        if (itemValue !== '') {
            _this.addIncome.push(itemValue);
        }
    });
};
AppData.prototype.getBudget = function () {
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
    this.budgetDay = this.budgetMonth / 30;
};
AppData.prototype.getTargetMonth = function () {
    return targetAmount.value / this.budgetMonth;
};
AppData.prototype.getStatusIncome = function () {
    if (this.budgetDay >= 800) {
        return ('Высокий уровень дохода');
    } else if (this.budgetDay >= 300) {
        return ('Средний уровень дохода');
    } else if (this.budgetDay > 0) {
        return ('Низний уровень дохода');
    } else {
        return ('Что-то пошло не так!');
    }
};
AppData.prototype.getInfoDeposit = function () {
    if (this.deposit) {

        do {
            this.percentDeposit = +prompt('Какой годовой процент?', 10);
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
};
AppData.prototype.periodSelect = function () {
    periodAmount.innerHTML = periodSelect.value;
};
AppData.prototype.calcPeriod = function () {
    return this.budgetMonth * periodSelect.value;
};
AppData.prototype.getReset = function () {
    start.style.display = 'none';
    cancel.style.display = 'block';
};
AppData.prototype.getCancel = function () {
    let dataChildren = data.querySelectorAll('*');

    for (let i = 0; i < dataChildren.length; i++) {
        if (dataChildren[i].type == 'text' ||
            dataChildren[i].type == 'submit' ||
            dataChildren[i].type == 'checkbox') {
            dataChildren[i].setAttribute('disabled', '');
        }
    }
};
AppData.prototype.checkSalaryAmount = function () {
    if (salaryAmount.value == '') {
        start.setAttribute('disabled', 'disabled');
        start.style.pointerEvents = 'none';
    } else {
        start.removeAttribute('disabled');
        start.style.pointerEvents = null;
    }
};
AppData.prototype.reset = function () {
    let inputTextData = document.querySelectorAll('.data input[type=text]'),
        resultInputAll = document.querySelectorAll('.result input[type=text]');

    inputTextData.forEach(function (elem) {
        elem.value = null;
        elem.removeAttribute('disabled');
        periodSelect.value = 1;
        periodAmount.innerHTML = periodSelect.value;
    });

    resultInputAll.forEach(function (elem) {
        elem.value = '';
    });

    for (let i = 1; incomeItems.length > i; i++) {
        incomeItems[i].parentNode.removeChild(incomeItems[i]);
        btnsPlus1.style.display = '';
    }

    for (let i = 1; expensesItems.length > i; i++) {
        expensesItems[i].parentNode.removeChild(expensesItems[i]);
        btnsPlus2.style.display = 'block';
    }

    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.income = {};
    this.addIncome = [];
    this.incomeMonth = 0;
    this.expenses = {};
    this.addExpenses = [];
    this.expensesMonth = 0;
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;

    start.style.display = 'block';
    cancel.style.display = 'none';
};
AppData.prototype.preparation = function () {
    inputs.forEach(appData.getCheckPlaceholder);
    this.checkSalaryAmount();
    salaryAmount.addEventListener('input', this.checkSalaryAmount);
    btnsPlus1.addEventListener('click', this.addIncomeBlock.bind(this));
    btnsPlus2.addEventListener('click', this.addExpensesBlock.bind(this));
    periodSelect.addEventListener('input', this.periodSelect);
    start.addEventListener('click', this.start.bind(this));
    cancel.addEventListener('click', this.reset.bind(this));
};

const appData = new AppData();
appData.preparation();
