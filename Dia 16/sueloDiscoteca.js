/* 
Recrear el ejercicio del suelo de discoteca del dia 14, pero esta vez, 
cada cuadrado cambia al hacerle click
*/
"use strict";

import rn from './helpers.js';

const celdas=document.querySelectorAll('td');

function changeBackground(celda){
    const color=`rgb(${rn(255)},${rn(255)},${rn(255)})`;

    celda.style.background=color;
}


function handleCeldaClick(e){
    changeBackground(e.target)
}

for(const celda of celdas){
    celda.addEventListener("click",handleCeldaClick);
}