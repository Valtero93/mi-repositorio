"use strict"
'use strict';

/////// SET TIMEOUT ///////

function callback() {
    console.log('se acabo el tiempo');
}

console.log('empieza a contar');
setTimeout(callback, 5000);

///Parar un setTimeout
//necesitamos darle un nombre

const temporizador = setTimeout(() => {
    console.log('llegó al final');
}, 10000);

clearTimeout(temporizador);

///// setInterval /////

const cronometro = setInterval(() => console.log('un segundo....'), 1000);
clearInterval(cronometro);

//// Parar interval con timeout ////

const cronometro2 = setInterval(() => console.log('un segundo....'), 1000);

setTimeout(() => clearInterval(cronometro2), 7000);





//EJERCICIO-una funcion a la que le paso unos segundos y me los vaya contando segun va pasadndo el tiempo


//funcion que cree una alarma a la que le paso el tiempo (en segundos)
//va contando cada segundo
//al terminar el tiempo, suena y se para

function alarma(tiempo) {
    let segundo = 1;
    const intervalo = setInterval(() => {
        console.log(`segundo ${segundo}...`);
        segundo++;
    }, 1000);
    setTimeout(() => {
        clearInterval(intervalo);
        console.log('RING RING RING');
    }, tiempo * 1000);
}

//alarma(5);

function alarma2(tiempo) {
    let segundo = 1;
    const intervalo = setInterval(() => {
        if (segundo === tiempo) {
            clearInterval(intervalo);
            console.log('RING RING RING');
        } else {
            console.log(`segundo ${segundo}...`);
            segundo++;
        }
    }, 1000);
}

//alarma2(5);

function alarma3(tiempo) {
    let segundo = 1;
    const intervalo = setInterval(() => {
        console.log(`segundo ${segundo}...`);
        if (segundo === tiempo) {
            clearInterval(intervalo);
            console.log('RING RING RING');
        } else {
            segundo++;
        }
    }, 1000);
}

alarma3(5);

///// a partir de la ruta https://anapioficeandfire.com/api/houses/378 sacar
////todos los titulos del current lord de la casa










