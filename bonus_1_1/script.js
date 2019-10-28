'use strict';

let num1 = prompt('Введите первое число!'),
	num2 = prompt('Введите второе число!');

function comparisonOfNumbers(num1, num2) {
	if(num1 > num2){
	alert('Первое число больше второго!');
	} else if(num1 < num2){
		alert('Второе число больше первого!');
	} else{
		alert('Числа равны!');
	}
}

function isNumeric(n){
	let result;
	if(isNaN(parseFloat(n)) && !isFinite(n) || String(n).trim() === ''){
		return false;
	} else{
		result = n;
	}
	return result;
}

if(isNumeric(num1) && isNumeric(num2)){
	comparisonOfNumbers(num1, num2);
} else{
	alert('Введеные данные некорректны, начнём с самого начала :)');
	window.location.reload();
}