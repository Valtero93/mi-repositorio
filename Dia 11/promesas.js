'use strict';

let miVariableFutura;

setTimeout(() => {
    miVariableFutura = 'un valor';
}, 0);

console.log(miVariableFutura);

setTimeout(() => {
    console.log(miVariableFutura);
}, 0);

/////// PROMESAS //////
/* const myPromise = new Promise((resolve, reject) => {
  resolve()
}) */

const miPromesa = new Promise((aceptar, rechazar) => {
    setTimeout(() => {
        aceptar('El valor');
    }, 3000);
});

//Con then podemos trabajar con el valor de una promesa cuando ya está ACEPTADA
//va a esperar a que la promesa se resuelva para ejecutar el callback
miPromesa.then((respuesta) => {
    console.log(respuesta);
});

console.log(miPromesa);

const miOtraPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const num = Math.round(Math.random() * 10);
        if (num > 5) {
            resolve(num);
        } else {
            reject(num);
        }
    }, 5000);
});

miOtraPromesa
    .then((response) => console.log(`Todo salio bien, el numero es ${response}`))
    //con catch podemos trabajar con la respuesta de una promesa cuando esta RECHAZADA
    .catch((response) => console.error(`algo salio mal, el numero es ${response}`));

console.log(miOtraPromesa);
