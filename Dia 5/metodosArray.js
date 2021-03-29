'use strict';

const miArray = [5, 'cosa', true, 5, 'cosa', 8, true, 8, 3];
let miArraySinDeclarar;

console.log('array inicial: ', miArray);

////// METODOS DE ARRAY /////
////Push
//añade elementos al final del array
miArray.push(8);
//miArraySinDeclarar.push(8); no se puede hacer push si no es un array

miArraySinDeclarar = Array();

miArraySinDeclarar.push(8); //aqui si que puedo porque ya es un array
console.log(miArraySinDeclarar);

console.log('push: ', miArray);

//// Unshift
//añade cosas al principio del array

miArray.unshift(false);

console.log('unshift: ', miArray);

////Pop
//quita el ultimo elemento del array y las guarda

let ultimoElemento = miArray.pop();

console.log('pop: ', miArray);
console.log('pop: ', ultimoElemento);

////Shift
//quita el primer elemento del array y lo guarda

const primerElemento = miArray.shift();

console.log('shift: ', miArray);
console.log('shift: ', primerElemento);

////IndexOf
//Nos dice el indice de del elemento que queramos (si aparece más de una vez,
//solo el primero)

console.log('indice de la palabra cosa: ', miArray.indexOf('cosa'));

////Splice
//elimina uno o varios elementos del array desde determinada posicion y los guarda

const splice = miArray.splice(2, 2);

console.log('splice: ', miArray);
console.log('splice: ', splice);

////Slice
//Devuelve un fragmento del array, SIN modificar el original

const slice = miArray.slice(2, 4);
const sliceHastaElFinal = miArray.slice(4, miArray.length);
console.log(miArray.indexOf(3));

console.log('slice: ', miArray);
console.log('silce: ', slice);
console.log('hasta el final: ', sliceHastaElFinal);

////Reverse
//invierte el orden del array

miArray.reverse();

console.log('reverse: ', miArray);

//// forEach
// Itera por todos los leemntos del array
//Desaconsejao, mejor for...of, for normal u otros metodos que ya veremos

console.log('For each:');
miArray.forEach(function (elemento) {
    console.log(elemento);
});

//// Combinación de metodos

const listaCompra = ['patatas', 'leche', 'huevos', 'pan', 'galletas', 'harina', 'levadura'];
console.log(listaCompra);
listaCompra.splice(listaCompra.indexOf('huevos'), 1);

console.log(listaCompra);

console.log(listaCompra.slice(listaCompra.indexOf('pan'), listaCompra.indexOf('harina') + 1));







/* EJERCICIO */
// / * ################# * ## Ejercicio 3 ## * ################# * * Dado el arreglo = [1, 3, 9, 14, 17, 22] * nuevo array = [2, 4, 10, 15, 18, 23] * * 
// - Iterar por todos los elementos dentro de un array utilizando "for of" y mostrarlos en pantalla. * * * 
// - Generar otro array con todos los elementos del primer array incrementados en 1. ¿Con el método push? * * 
// - Calcular el promedio. // el promedio es el total de la suma de todos los elementos, dividido entre la * cantidad de elementos * * /

console.log("Mostrar array");

const array=[1,3,9,14,17,22];
for(let i of array){
    i+=1;
    console.log(i);
}


// const arrayAumentado=[];
// function aumentar1(array){
//     for(const numero of array){
//         arrayAumentado.push(numero+1);
//     }
//     return arrayAumentado;
// }
// console.log(aumentar1(arrayAumentado));
// // console.log(arrayAumentado);



console.log("Media del array");

function promedio(array){
    let total=0;
    for(const numero of array){
        total +=numero;
        console.log(total);
    }
}
promedio(array);

 

//EJERCICIO
/*
  Quiero hacer una funcion que admita un parametro de entrada
  Este parametro va a ser un array de numeros
  NO VOY A USAR ARRAY.SORT
  La funcion devuelve un array ordenado
  No modifico el original
*/
console.log("Ordenar array");

const desordenado = [6, 7, 2, 8, 1];
// const ordenado = [1, 2, 6, 7, 8];
 function ordenar(arrayDesor){
     const copia=[...arrayDesor];
     for(let j=0;j<desordenado.length;j++){
         for(let z=0;z<copia.length;z++){
             if(copia[j]<copia[z]){
                 const temp=copia[j];
                 copia[j]=copia[z];
                 copia[z]=temp;
             }
         }
    }
    return copia;
}  
console.log(ordenar(desordenado));
    
 
console.log("Ordenar array segunda forma");
//hacer una segunda funcion que siempre me este diciendo cual es el numero mas pequeño
function pickSmall(arrayDesor){
    let small=arrayDesor[0];
    for(let j=0;j<arrayDesor.length;j++){
        if(arrayDesor[j]<small){
            small=arrayDesor[j];
        }
        console.log(small);
    }
    return small;
}

function ordenarV2(arrayDesor){
    const copia=[...arrayDesor];
    const ordenado=[];
    while (copia.length){
        let small=copia.splice(copia.indexOf(pickSmall(copia)),1);
    ordenado.push(small[0]);    
    }
    
    return ordenado;
}
console.log(ordenarV2(desordenado));



console.log("Ejercicio pacientes ");
// EJERCICIO

// Quiero hacer una funcion que admita de parametro un array de pacientes 
// La funcion devuelve los que estan infectados al dia siguiente 
// Pero no no modifica los que estaban infectados inicialmente 
// Si alguien esta infectado, al dia siguiente estan infectados los que estan justo al lado 
// Otro virus Infecta igual que el anterior, 
// la diferencia es que el que estaba infectado al dia siguiente esta sano * /
console.log("Virus 1");
const patients = [true, false, true, false, false, false, true, true]; 
// Devuelve [true,true,true,true,false,true,true,true] 
// Virus2 Devuelve [false,true,false,true,false,true,false,false] 
function virus1(arrayPacientes){
    const copia=[...arrayPacientes];
    for(let j=0;j<arrayPacientes.length;j++){
        if(arrayPacientes[j]===true){
            if(j>0){
                copia[j-1]=true;
            }
            if(j<copia.length-1){
                copia[j+1]=true;
            }
        }     
   }

   return copia;
}  


// function virus1V2(arrayPacientes){
//     const copia=[...arrayPacientes];
//     for(let j=0;j<copia.length;j++){
//         if(arrayPacientes[ j-1] || arrayPacientes[i+1{
//             copia[j]=true;
//         }])

//     }
//     return copia;
// }
console.log(virus1(patients));



console.log("Virus 2");

function virus2(arrayPacientes){       
    const copia=[...arrayPacientes];
        for(let j=0;j<arrayPacientes.length;j++){
            if(arrayPacientes[j]===true){
                if(j>0){
                    copia[j-1]=true;
                }
                if(j<copia.length-1){
                    copia[j+1]=true;
                }
            }   
              
       }
       for(let i=0;i<arrayPacientes.length;i++){
           if(arrayPacientes[i]){
            copia[i]=false;
           }
       }
       return copia;
    }
console.log(virus2(patients));