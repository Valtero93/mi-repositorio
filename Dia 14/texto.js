'use strict';

const titulo = document.querySelector('h1');
let textoTitulo = titulo.textContent;
//textoTitulo = 'hol.a'; //esto solo cambia la variable

const nombre = 'Zoe';

if (nombre) {
    titulo.textContent = `Hola ${nombre}!`;
}
console.log(textoTitulo);

const main = document.querySelector('main');
console.log(main.textContent);
console.log(main.innerHTML);

main.textContent = '<ul><li>Elemento de lista</li></ul>';
main.innerHTML = '<ul><li>Elemento de lista</li></ul>';
