"use strict"

const primerP=document.querySelector("p");
primerP.classList.add("importante");/* añade la clase importante */
primerP.classList.remove("text");/* quita la clase texto */
primerP.classList.togle("importante");/* quita la clase si la tiene,y la añase si no */
primerP.classList.togle("texto");

console.log(primerP.classList.contains("importante"));//devuelve true si tiene la clase y false si no

primerP.classList.replace("text","importante");/* sustituye el texto por importante*/

