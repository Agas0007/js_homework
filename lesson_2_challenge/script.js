'use strict';

let num = 266219,
    p;

p = eval(num.toString().split('').join('*'));
console.log(p);

p **= 3;

// console.log(p);
console.log(String(p).slice(0,2));
