"use strict"

const input = document.querySelector('[name="nombre"]');
const button = document.querySelector('button');

console.log('type: ', input.getAttribute('type'));
console.log('id: ', input.getAttribute('id'));
console.log('name: ', input.getAttribute('name'));
//console.log(input.getAttribute('disabled'));

console.log('cambio type a password y añado disbaled');
input.setAttribute('type', 'password');
console.log('type: ', input.getAttribute('type'));
input.setAttribute('disabled', 'yes');

console.log('tiene disabled: ', input.hasAttribute('disabled'));
console.log('tiene lang: ', input.hasAttribute('lang'));
console.log('tiene name: ', input.hasAttribute('name'));

console.log('quito disbaled y name');
input.removeAttribute('disabled');
input.removeAttribute('name');
console.log('tiene disabled: ', input.hasAttribute('disabled'));
console.log('tiene name: ', input.hasAttribute('name'));

console.log('Deshabilito el boton');
button.setAttribute('disabled', 'yes');

//toggle solo vale para booleanos, lo cambia
button.toggleAttribute('hidden'); //true
button.toggleAttribute('hidden'); //!true = false
button.toggleAttribute('hidden'); //!!true = true

const enlaces = document.querySelectorAll('header nav a');

console.log(enlaces);

/* for (const enlace of enlaces) {
    const color = enlace.getAttribute('data-color');
    enlace.style.color = color;
} */

enlaces[2].dataset.color = 'pink';
enlaces[2].dataset.fondo = 'blue';

for (const enlace of enlaces) {
    const { color, size, fondo = 'black' } = enlace.dataset;
    enlace.style.color = color;
    enlace.style.fontSize = size;
    enlace.style.background = fondo;
}













