"use strict"

// METODO DE ARRAY: JOIN
// Concatena el array con el conector que indiquemos,devolviendo un string
console.log("array join")
const array=["Hello","world"];

const stringConComa =array.join();
const stringConEspacio =array.join(" ");
const stringConGuion =array.join("-");
const stringPegado =array.join("");

console.log(stringConComa);
console.log(stringConEspacio);
console.log(stringConGuion);
console.log(stringPegado);

// METODOS DE STRING
// Split
// Divide el string segun el separador que indiquemos,devolviendo un array
// Se puede indicar un limite
console.log("array split")

const string="Hello world";

const arrayConUnElemento=string.split();
const arrayPalabras=string.split(" ");
const arrayLetras=string.split(" ");
const arrayLetrasConLimite=string.split("",4);/* Indicamos la cantidad de elementos que tendra el array */

console.log(arrayConUnElemento);
console.log(arrayPalabras);
console.log(arrayLetras);

const palabra="palabra";

// const arrayPalabra=palabra.split("");

// const arrayPalabrasAlReves=arrayPalabra.reverse();
// console.log(arrayPalabrasAlReves);

// const arrayPalabrasAlReves=arrayPalabrasAlReves.join("");

const palabrasAlReves=palabra.split("").reverse().join("");
console.log(palabrasAlReves);


// lenth (propiedad)
// devuelve el numero de caracteres del string
console.log(string.length);


// toLowerCase
// convierte todo a minusculas
console.log("lower case: ",string.toLowerCase());


// toUpperCase
// convierte todo a mayusculas
console.log("upper case: ",string.toUpperCase());


// IndexOf
// Devuelve el indice de la primera vez que aparece
console.log("Index of 'l' :",string.indexOf("l"));
console.log("Index of 'ld' :",string.indexOf("ld"));
console.log("Index of 'u' :",string.indexOf("u"));/* si no lo encuentra es -1 */
 

// lastIndexOf
// devuelve el indice de tu ultima vez que aparece
console.log("last Index of 'l' :",string.lastIndexOf("l"));
console.log("Index of 'u' :",string.indexOf("u"));

// Repeat
// multiplica el string y devuelve otro concatenado
console.log("repeat (5): ",string.repeat(5));

// Replace
// Sustituye el string del primer parametro la primera vez que aparece,por el segunddo

console.log("replace 'o' por 'a' :",string.replace("o","a"));
console.log("replace 'ld' por 'a' :",string.replace("ld","a"));
console.log("replace 'o' por 'tghs' :",string.replace("o","a"));

// ReplaceAll
// Igual que replace pero con todas las coincidencias
console.log("replaceAll 'o' por 'a' :",string.replaceAll("o","a"));

// Slice
// Devuelve una parte de un string

console.log("Slice desde el 3 al final: ",string.slice(3));
console.log("Slice desde el 3 al 7: ",string.slice(3,7));/* desde (incluido) hasta (no incluido) */



console.log("comparando strings:");
 const string1="Hello World";
 const string2="Hello World";
 console.log(string1 === string2);
 console.log(string1.toLowerCase()===string2.toLowerCase());



//  EJERCICIO
// Crear una funcion que me indique si un string es un palindromo. 
// Un palindromo es una frase / palabra que se lee igual al derecho y al reves. 
// Ejemplos: 
// -Arriba la birra 
// -Dabale arroz a la zorra el abad 
// Si introduzco un palindromo devuelve true, si no, devuelve false 
// BONUS: No tendrá en cuenta signos de puntuacion. 
// Es decir, funcionaria (devolveria true) con 
// -Arriba la birra! 
// -m 


// console.log("Ejercicio palindromo")

// let frase = prompt("Ingrese la frase o palabra: ");

// function palindromo(fras) {
    
//     let minuscula = fras.toLowerCase();// Convierto la cadena a minúscula
//     console.log(minuscula);
   
//     let convertirArray = minuscula.split(""); // Convierto la cadena en un array
//     console.log(convertirArray);
    
//     let sinEspacios = "";// Elimino los espacios del array
//     for (let i in convertirArray) {
//         if (convertirArray[i] != " ") {
//             sinEspacios += convertirArray[i];
//         }
//     }
//     console.log(sinEspacios);
    
//     let nuevoArray = sinEspacios.split("");// Vuelvo a convertir en array
//     let alReves = sinEspacios.split("").reverse();
//     console.log(alReves);

//     let flag = true;// Verifico sin son iguales
//     for (let i = 0; i < nuevoArray.length; i++) {
//         if (nuevoArray[i] != alReves[i]) {
//             flag = false;
//             break;
//         };
//     };
//     if (flag) {
//         return ("La cadena es un palíndromo.");
//     } else {
//         return ("La cadena NO es un palíndromo.");
//     }
// };

// console.log(palindromo(frase));

 
// // console.log("Ejercicio palindromoB")
// // console.log(frase);
// //     function esPalindromo(frase){
// //         const fraseMninuscula=frase.toLoerCase();
// // //        const fraseLimpia=frase.replaceAll(" ","");
//         const fraseLimpia=frase.replaceAll(/[^a-z]/g,"");/* con esto quitamos tambien puntos ademas de espacios,todo lo que no sean minusculas */
// //         const fraseArray=frase.split("");
// //         const fraseArrayReves=frase.reverse();
// //         const fraserReves=frase.join("");

// //         console.logh(frase);
// //         console.log("fraseReves")

// //         return frase === frasesReves;
// //     }
// // console.log(esPalindromo("Arriba la birra"));



// function esPalindromoV2(frase){
//     // frase=frase.toLowerCase().replaceAll(" ","");
//     frase=frase.replace(/[^a-z]/g,"").toLowerCase();/* con esto quitamos tambien puntos ademas de espacios,todo lo que no sean minusculas */
//     console.log(frase);

//     const fraseReves=frase.split("").reverse().join();

//     return frase===fraseReves;
// }
// console.log(esPalindromoV2("Arriba la birra"));