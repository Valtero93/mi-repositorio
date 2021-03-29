"use strict";

 const array=[1,3,9,14,17,22] 
for(const numero of array){
    console.log(numero);
}



/* Ejercicio */
/ * * Crear una función que comparar si dos matrices son iguales * (devuelve true o false) * * /

console.log("Comparador");
const array1=[5,6,8];
const array2=[5,6,8];
const array3=[5,8,8];

// function comparar(array1,array2){
//     let contadorTrues=0;
//     for(let i=0;i<array1.length;i++){
//         if(array1[i]===array2[i]){
//             contadorTrues++;
//         }

//     }
//    return contadorTrues===array1.length;
// }


function comparar(array1,array2){
    for(let i=0;i<array1.length;i++){
        if(array1[i]!==array2[i]){
            return false;
        }   
    }
    return false;
}
console.log(comparar(array1,array2));
console.log(comparar(array1,array3));