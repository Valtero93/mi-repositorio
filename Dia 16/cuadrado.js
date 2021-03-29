"use strict"

/* 
Crear un cuadrado de 150x150 (con tml y css) añadirle una funcion que se ejecute 
al hacer click. Cuando funcione, añadir otra que haga imposible hacer click.
*/
import rn from './helpers.js';

const cuadrado = document.querySelector('div');

function handleCuadradoClick() {
    console.log('Has hecho click!!!');
}

cuadrado.addEventListener('click', handleCuadradoClick);

function handleCuadradoMouseover() {
    const anchoMax = window.innerWidth - 150;
    const altoMax = window.innerHeight - 150;
    cuadrado.style.left = `${rn(anchoMax)}px`;
    cuadrado.style.top = `${rn(altoMax)}px`;
}

cuadrado.addEventListener('mouseover', handleCuadradoMouseover);



/* 
Recrear el ejercicio del suelo de discoteca, pero esta vez, 
cada cuadrado cambia al hacerle click
*/

