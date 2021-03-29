"use strict"

const texto = document.querySelector('h1');

/* const rojo = document.querySelector('#rojo');
const verde = document.querySelector('#verde');
const azul = document.querySelector('#azul');

const handleRojo = () => {
    texto.style.color = 'red';
};

const handleVerde = () => {
    texto.style.color = 'green';
};

const handleAzul = () => {
    texto.style.color = 'blue';
};

rojo.addEventListener('click', handleRojo);
verde.addEventListener('click', handleVerde);
azul.addEventListener('click', handleAzul);
 */

const botones = document.querySelectorAll('button');

function handleButtonClick(e) {
    const boton = e.target;
    const { color } = boton.dataset;
    texto.style.color = color;
}

for (const boton of botones) {
    boton.addEventListener('click', handleButtonClick);
}
