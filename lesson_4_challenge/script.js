'use strict';

function myFunc(arg){
    if(!isNaN(parseFloat(arg)) && isFinite(arg)){
        return ('Аргумент не является строкой!');
    } else{
        return (arg.length > 30) ? arg.trim().slice(0, 30)+'...' : arg.trim();
    }
}

console.log(myFunc(123));


console.log(myFunc(`Lorem ipsum dolor sit amet consectetur adipisicing elit.
Minus architecto recusandae nostrum soluta corporis fugit, veniam amet natus 
eligendi perspiciatis, nemo ea impedit quas dolor. Quis numquam harum eveniet 
quo optio voluptatibus adipisci aut neque nesciunt, magnam eius rerum! Et animi 
amet reprehenderit dolorem? Reprehenderit soluta temporibus odio vel iusto quod 
inventore iure optio autem?`));