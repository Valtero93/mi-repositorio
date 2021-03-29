'use strict';

import todayDate from './helpers.js'; //es mejor no cambiar el nombre, pero se puede si da problemas

import * as helpers from './helpers.js';

import { add as suma, PI, randomNumber as random } from './helpers.js';

const today = 'hoy';

console.log(helpers);
console.log(helpers.add(4, 5));

console.log(suma(4, 5));

console.log(random(10));

console.log(todayDate());

const body = document.querySelector('body');

setInterval(() => {
    body.style.backgroundColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
}, 500);
