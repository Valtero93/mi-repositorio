'use strict';

const li = document.querySelector('li');
console.log(li);
console.log(li.nextElementSibling);
console.log(li.previousSibling.previousSibling); //saca cosas que no son elementos del DOM
console.log(li.parentElement.nextElementSibling);

const header = document.querySelector('header');
const h1 = header.querySelectorAll('.laquequiero');
console.log(h1);

const main = document.querySelector('main');

console.log(main.childNodes);
console.log(main.children);
console.log(main.firstElementChild);
console.log(main.lastElementChild);
console.log(main.previousElementSibling);
console.log(main.nextElementSibling);
console.log(main.parentElement);
