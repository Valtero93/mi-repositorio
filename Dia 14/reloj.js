"use strict"

//import now from "./helpers.js";

const reloj=document.querySelector("h1");

function actualizarReloj() {
    const horas=now().getHours();
    const minutos=now().getMinutes();
    const segundos=now().getSeconds();

     reloj.textContent=`${horas}:${minutos}:${segundos}`;
    //console.log(actualizarReloj());
}

setInterval(actualizarReloj,1000);
actualizarReloj();

