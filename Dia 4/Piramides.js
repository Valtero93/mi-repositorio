'use strict';


// MATH
// Random---genera un numero aleatorio del 0 al 1con muchos decimales

console.log(Math.random());

console.log(Math.random())*10;
console.log(Math.random())*100;

console.log("/////////");



//Round---Redondea al entero más cercano
console.log("Math.round()");
console.log(Math.round(5,8));
console.log(Math.round(5,4));
console.log(Math.round(5,5));/* si es exactamente x.5 redondea al superior solo con ese numero */
Math.round(Math.random()*15);



/* Ceil */
// redondea hacia arriba
console.log("Math.ceil()");
console.log(Math.ceil(5,4));
console.log(Math.ceil(5,8));
console.log(Math.ceil(5.000000000001));
console.log(Math.ceil(5,0));
console.log(Math.round(Math.random()*15));/* numero aleatorio entre 1 al 15 */


// Floor
/* redondea siempre hacia abajo */
console.log("Math.floor()");

console.log("Math.floor(5,4)");
console.log("Math.floor(5,6)");
console.log("Math.floor(5,999999999999)");
console.log(Math.floor(Math.random()*15));/* numero aleatorio entre 0 al 14 */


console.log("/////////");
// EJERCICIO
/* 
* Crear una función a la que le paso un número y me devuelve true 
*si el numero es par y false si es impar
*
 */

// let numero = prompt("Introduce un número entero");

// let resultado = parImpar(numero);
// alert("El número "+numero+" es "+resultado);
// console.log("El número "+numero+" es "+resultado)
// function parImpar(numero) {
//   if(numero % 2 == 0) {
//     return "par";
//   }
//   else {
//     return "impar";
//   }
// }



// function parImpar(numero) {
//   if(numero % 2 === 0) {
//     return true;
//   }
//   else {
//     return false;
//   }
//   return numero % 2 === 0;
// }
// console.log(parImpar(6));

console.log("/////////");
// EJERCICIO 
// Crear una función que recibe dos numeros y comprueba si el primero * es divisible entre el segundo (devuelve true o false segun el caso) * * Un numero es divisible entre otro cuando el resto de la division da 0 

// function esDivisible(n1,n2) {
//     if((n1 % n2)   === 0) {
//       return true;
//     }
//     else {
//       return false;
//     }
//     return n1 % n2 === 0;
//   }
//   console.log(esDivisible(6,3));
//   console.log(esDivisible(prompt("di un numero: "),prompt("Di otro numero: ")));



//   let n1 = prompt("Escribe el primer número");
//   let n2 = prompt("Escribe el segundo número");
//   if (n1 % n2 === 0) {
//   document.write("Son divisibles con resto 0");
//   } else {
//   document.write("NO son divisibles con resto 0");
//   }


console.log("/////////");
/* EJERCICIO */
/*  /*
  - Otra funcion que puede usar la que acabamos de hacer y que 
  diga si un numero es primo o no
  va a devolver true si es primo y false si no es primo
  
  Un numero es primo si solo es divisible entre 1 y el mismo
  Solo probamos numeros enteros, numeros >0. A mi me vale si asumis que 
  el numero siempre va a ser >=2

*/

//   function primo(numero) {

//     for (let i = 2; i < numero; i++) {
  
//       if (numero % i === 0) {
//         return false;
//       }
  
//     }
//      return true
//     return numero !== 1;
//   }
//   console.log(primo(prompt("di un numero: "))); 


  console.log("/////////");
  /* EJERCICIO */
//    - Una ultima funcion que saca los numeros primos hasta el que le indiquemos 

// console.log("Ejercicio lista de primos");
// function listaPrimos(limite){
//     if(isNaN(limite)|| limite < 2){
//         return "numero invalido";
//     }
//     for(let i=2;i<=limite;i++){
//         if(primo(i)){
//             console.log(i)
//         }
//     }
//     return "mira la consola"
// }
// console.log(listaPrimos(100));


// console.log("/////////");




// EJERCICIO
/*
Hacer una funcion a la que se le pasa un parámetro
El parámetro va a ser un número
El número indica la cantidad de pisos de una pirámide

Las piramides a continuación se han generado pasando un 5 a la función
PIRAMIDE 0
1
2
3
4
5

PIRAMIDE 1
*
**
***
****
*****

  PIRAMIDE 2
    *
   **
  ***
 ****
*****

PIRAMIDE 3

    *
   ***
  *****
 *******
*********

PIRAMIDE 4

    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *

*/


// console.log("Piramide 0");
// function piramide(altura){
//     for(let i=0;i<altura;i++){
//         console.log(i+1);
//     }
// }
// piramide(5);


// console.log("/////////");
// console.log("Piramide 1");
// function piramide1(altura){
//     for(let i=0;i< altura;i++){
//         construirPiso(i+1);
//     }
// }

// function construirPiso(tamaño){
//     let piso=" ";
//     for(let j=0;j<tamaño;j++){
//         piso +="*";
//     }
//     console.log(piso);
// }
// piramide1(5);


// console.log("/////////");
// console.log("Piramide 2");
// function piramide2(altura){
//     for(let i=0;i< altura;i++){
//         console.log(construirPiso(altura-(i+1)," ")+construirPiso(i+1));
//     }
// }

// function construirPiso(tamaño,bloque="*"){
//     let piso=" ";
//     for(let j=0;j<tamaño;j++){
//         piso +=bloque;
//     }
//     // console.log(piso);
//     return piso;
// }
// piramide2(5);



// console.log("/////////");
// console.log("Piramide 3");
// function piramide3(altura){
//     for(let i=0;i< altura;i++){
//         console.log(construirPiso(altura-(i+1)," ")+construirPiso(i+1)+construirPiso(i));
//         // construirPiso(i+1);
//     }
// }

// function construirPiso(tamaño,bloque="*"){
//     let piso="";
//     for(let j=0;j<tamaño;j++){
//         piso +=bloque;
//     }
//     // console.log(piso);
//     return piso;
// }
// piramide3(5);





console.log("/////////");
console.log("Piramide 4");
function piramide4(altura){
    for(let i=0;i< altura;i++){
        console.log(construirPiso(altura-(i+1)," ")+construirPiso(i*2 +1));
        // construirPiso(i+1);
    }
    for(let i=altura-2;i>=0;i--){
      console.log(construirPiso(altura-(i+1)," ")+construirPiso(i*2 +1));
    }
}

function construirPiso(tamaño,bloque="*"){
    let piso="";
    for(let j=0;j<tamaño;j++){
        piso +=bloque;
    }
    // console.log(piso);
    return piso;
}
piramide4(5);




