'use strict';

let arr = ['2694054', '2514305', '65929436', '4630264', '3695624', '8399526', '1544962'];

console.log('for');
for (let i = 0; i < arr.length; i++) {
    if (arr[i].slice(0, 1) === '2' || arr[i].slice(0, 1) === '4') {
        console.log(+arr[i]);
    }
}

console.log('for of');
for (let item of arr) {
    if (item.slice(0, 1) === '2' || item.slice(0, 1) === '4') {
        console.log(+item);
    }
}

console.log('map');

const num = arr.map(function (item) {
    if (item[0] === '2' || item[0] === '4') {
        console.log(+item);
    }
});

console.log('filter');
let filterNum = arr.filter(item => item[0] === '4' || item[0] === '2');

console.log(filterNum);


for (let i = 1; i <= 100; i++) {
    if ((i != 1) && (((i % 2) != 0) || (i == 2))) {
        let status = 1;
        for (let j = 2; j <= (i / 2); j++) {
            if ((i % j) == 0) {
                status = 0;
            }
        }

        if (status == 1) {
            console.log("Простое число " + i + " его делители 1 и " + i);
        }
    }

}