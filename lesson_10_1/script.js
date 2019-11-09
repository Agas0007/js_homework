'use strict';

class DomElement {
    constructor(selector, height, width, bg, fontSize){
        this.selector = selector;
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;

        this.createElement = function(){
            let newElement;
            if(selector[0] == '.'){
                newElement = document.createElement('div');
                newElement.setAttribute('class', 'block');
                newElement.style = `height: ${this.height};
                width: ${this.width};
                background: ${this.bg};
                font-size: ${this.fontSize};`;
                document.addEventListener('DOMContentLoaded', () => {
                    document.body.appendChild(newElement);
                });
            } else if(selector[0] == '#'){
                newElement = document.createElement('p');
                newElement.textContent = `Если тебе тяжело, значит ты поднимаешься в гору. 
                Если тебе легко, значит ты летишь в пропасть`;
                newElement.setAttribute('id', 'best');
                newElement.style = `font-size: ${this.fontSize};`;
                document.addEventListener('DOMContentLoaded', () => {
                    document.body.appendChild(newElement);
                });
            }
        };
    }
}

const newElem = new DomElement('.block', '100px', '100px', 'gray', '14px');
const newElem2 = new DomElement('#best', 'inherit', 'inherit', 'inherit', '26px');
newElem.createElement();
newElem2.createElement();