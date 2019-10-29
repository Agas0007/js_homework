'use strict';

let books = document.querySelectorAll('.books');
let elem = document.querySelectorAll('.book');

books[0].insertBefore(elem[1], elem[0]);
books[0].insertBefore(elem[4], elem[2]);
books[0].appendChild(elem[2]);

let body = document.querySelector('body');
body.setAttribute('style', 'background-image: url(image/adv.jpg)');

document.querySelectorAll('a')[2].textContent = 'Книга 3. this и Прототипы Объектов';

let node = document.querySelectorAll(".adv");
node[0].remove();

let secondBook = document.querySelectorAll('ul')[1];
let secondBookChildren = secondBook.querySelectorAll('li');
secondBook.insertBefore(secondBookChildren[2], secondBookChildren[10]);
secondBook.insertBefore(secondBookChildren[6], secondBookChildren[4]);
secondBook.insertBefore(secondBookChildren[8], secondBookChildren[4]);

let fifhtBook = document.querySelectorAll('ul')[4];
let fifhtBookChildren = fifhtBook.querySelectorAll('li');
fifhtBook.insertBefore(fifhtBookChildren[2], fifhtBookChildren[6]);
fifhtBook.insertBefore(fifhtBookChildren[9], fifhtBookChildren[3]);
fifhtBook.insertBefore(fifhtBookChildren[5], fifhtBookChildren[8]);

let sixthBook = document.querySelectorAll('ul')[5];
let sixthBookChildren = sixthBook.querySelectorAll('li');
let clone = sixthBookChildren[0].cloneNode(true);
sixthBook.appendChild(clone);
sixthBook.querySelectorAll('li')[10].textContent = 'Глава 8: За пределами ES6';
sixthBook.appendChild(sixthBookChildren[9]);
