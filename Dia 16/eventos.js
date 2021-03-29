'use strict';

//////////  EVENTOS //////////
const button = document.querySelector('button');

///// Método tradicional
/* button.onclick = function () {
    console.log('Acabas de hacer click');
};

button.onmouseover = function () {
    console.log('Has pasado por encima del boton');
};

button.onfocus = function () {
    console.log('acabas de hacer foco en el boton');
}; */

///// Metodo moderno (recomendado)
////utilizando event listeners

//con funcion anonima
button.addEventListener('click', () => {
    console.log('has hecho click');
});

//funcion con nommbre
function handleButtonClick() {
    console.log('tambien click');
}

//se añade la funcion con nombre
button.addEventListener('click', handleButtonClick);

const handleButtonMouseover = () => {
    console.log('pasaste el raton');
};

button.addEventListener('mouseover', handleButtonMouseover);

//se puede añadir la misma funcion a varios eventos si tiene nombre
const funcionParaQuitar = () => {
    console.log('esto lo voy a quitar del click');
};

button.addEventListener('click', funcionParaQuitar);
button.addEventListener('mouseover', funcionParaQuitar);

//se puede quitar una funcion de un evento, si tiene nombre
button.removeEventListener('click', funcionParaQuitar);

//todo puede lanzar eventos
const body = document.querySelector('body');

body.addEventListener('click', () => {
    console.log('has hecho click en el body');
});
