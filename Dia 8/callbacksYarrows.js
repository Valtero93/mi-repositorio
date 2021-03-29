'use strict';

///////// CALLBACKS //////
////Funciones que se pasan como paramentros de otra funcion,
////para usarlas dentro

console.log('callbacks:');
function lowerCaseEcho(message) {
    console.log(message.toLowerCase());
}

function upperCaseEcho(message) {
    console.log(message.toUpperCase());
}

function changeCase(caseFunction) {
    const message = 'khjjJBSKIBDikbijk';

    caseFunction(message);
}

changeCase(lowerCaseEcho);

changeCase(upperCaseEcho);

////// ARROW FUNCTION (funcion flecha) /////
// (parametros) => resultado
// (paramtros) => { return resultado}
// si no llevan llaves, tienen return implicito

console.log('arrow functions');
const saludo = () => 'Hola';
console.log(saludo());

const saludo2 = () => {
    console.log('hola');
    return 'adios';
};

console.log(saludo2());

const suma = (a, b) => a + b;

console.log(suma(3, 4));

//////
console.log('callback + arrow function');

const resta = (a, b) => a - b;

function calculadora(a, b, operacion) {
    return operacion(a, b);
}

console.log(calculadora(4, 3, suma));
console.log(calculadora(4, 3, resta));
console.log(calculadora(4, 3, (a, b) => a * b));
console.log(calculadora(4, 3, (a, b) => a));
console.log(calculadora(4, 3, (a, b) => a / b));
console.log(calculadora(4, 3, (a, b) => Math.round(a / b)));
