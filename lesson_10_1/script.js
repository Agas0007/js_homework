'use strict';

let DomElement = {
    selector: '',
    height: '',
    width: '',
    bg: '',
    fontSize: '',
    createElement: function(selector, height, width, bg, fontSize){
        let newElement;
        if(selector[0] == '.'){
            newElement = document.createElement('div');
            newElement.setAttribute('class', 'block');
            newElement.style = 
            `height: `+height+`;`+
            `width:`+width+`;`+
            `background-color:`+bg+`;`+
            `font-size:`+fontSize+`;`;
            document.addEventListener('DOMContentLoaded', () => {
                document.body.appendChild(newElement);
            });
        } else if(selector[0] == '#'){
            newElement = document.createElement('p');
            newElement.setAttribute('id', 'best');
            document.body.appendChild(newElement);
        }
    },
};

let newDomElement = Object.create(DomElement);
newDomElement.createElement('.block', '100px', '100px', 'gray', '14px');