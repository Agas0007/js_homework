function sum() {
	let sum = 0,
		question;

	while(question !== null){

		question = prompt('Введите число');

		if(!isNaN(question)){
			sum += +question;
		}
	}
	return sum;
}

console.log(sum());