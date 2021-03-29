"use strict"
//////// AÑADIR ELEMENTOS //////

//Añadir al final
const list = document.createElement('ul'); //crera un elemento ul
const item = document.createElement('li'); //crea un elemento li
/* const contenido = document.createTextNode('Contenido de la lista'); //crea un noto con texto

item.appendChild(contenido); //añade el contenido al li */

const body = document.querySelector('body');

item.textContent = 'Contenido de la lista';
list.appendChild(item); //añade el li al ul
body.appendChild(list); //añade la lista al body

//Añadir por el medio
const htmlList = document.querySelector('.list'); //selecciona la lista con clase .list

const newItem = document.createElement('li'); //crea un li
newItem.textContent = 'antes que el segundo'; //añade texto al li

const segundo = document.querySelector('.dous'); //selecciona el elemento con clase dous

htmlList.insertBefore(newItem, segundo);

////// BORRAR ELEMENTOS /////

const ultimo = document.querySelector('.list li:last-child');

htmlList.removeChild(ultimo);

//sin seleccionar especificamente el padre

const primero = document.querySelector('.list2 li:first-child');
primero.parentElement.removeChild(primero);

//borrar directamente el elemento
const segundo2 = document.querySelector('.list2 .dous');
segundo2.remove();


