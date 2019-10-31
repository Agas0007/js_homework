'use strict';

let year1,
	year2,
	start,
	end;

do {
	year1 = +prompt('Укажите год');
} while (isNaN(year1) || year1 === 0);

do {
	year2 = +prompt('Ещё один');
} while (isNaN(year2) || year2 === 0);

if (year1 > year2) {
	start = year2;
	end = year1;
} else if (year2 > year1) {
	start = year1;
	end = year2;
} else {
	alert('Даты равны!');
	window.location.reload();
}

for(start; start <= end; start++){
	if(((start % 4) == 0) && (((start % 100) != 0) || ((start % 400) == 0))){
		console.log(start);
	}
}