'use strict';

let DomElement = {
    selector: '',
    height: '300px',
    width: '',
    bg: '',
    fontSize: '',
    createElement: function(selector){
        let newElement;
        if(selector[0] == '.'){
            newElement = document.createElement('div');
            newElement.setAttribute('class', 'block');
            document.body.appendChild(newElement);
            console.log(this.height);
        } else if(selector[0] == '#'){
            newElement = document.createElement('p');
            newElement.setAttribute('id', 'best');
            document.body.appendChild(newElement);
        }
    },
};

let newDomElement = Object.create(DomElement);
newDomElement.createElement('.block');
console.log(newDomElement);
