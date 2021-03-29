"use strict"

// BUCLES

// Bucle while---se ejecuta mientras una condicion se cumpla

let contador=5;
let segundo=0;
while(contador){
    console.log(contador);
    segundo++;
    if(segundo===20){
        break;
    }
}

let numero=0;
while(numero>0){
    console.log(numero);
    numro++;
    if(numero===5){
        break;
    }
}


// Bucle DO WHILE---haz algo mientras se cumpla una condicion
// let numero=0;
do{
    console.log(numero);
    numero++;
    if(numero===5){
        break;
    }
    console.log(numero);
    console.log("Termina la vuelta");
    numero++;
}while(numero>0);



// BUCLE FOR---INDICE,CONDICION,MODIFICACION
// for(let i=0;i<=5;i++){
//     console.log(i);
// }

// for(let i=5;i>=0;i--){
//     console.log(i);
// }

// for(let i=0;i<=10;i +=3){
//     console.log(i);
// }


// // fro con break
// for(let i=0;i<1000;i++){
//     console.log(i);
//     if(i===5) break;
// }

// // for con continue
// for(let i=0;i<5;i++){
//     if(i ===3 ) continue;/* si es 3 sale del bucle */
//     console.log(i);
// }



// EJERCICIO DE LA BOMBA
//Quiero hacer una función para desactivar una bomba La bomba nos va a dar 5 intentos para desactivar Cada intento nos lo pide por el prompt Si conseguimos desactivar la bomba saca un mensaje por la consola y no pide mas intentos Si agotamos todos los intentos explota 
// Math.round(Math.random()*10)-----numero aleatorio entre 0 y 10



const desactivacion=Math.round(Math.random()*10);
let codigo=0;
let intentos=prompt("Introduce el numero de intentos: ");
function bomba(intentos){
for(let i=0;i<intentos;i++){
    codigo=prompt("Introduce el codigo de la bomba de 0-10: ");
    if(+codigo===desactivacion){/* no el + delante le dices que es un numero */
        return "BOMBA DESACTIVADA";
        
    }
    console.log(`TE QUEDAN ${intentos-i-1} INTENTOS`)
    
}
return "BOOOOOOOOOM!!!";
}
console.log(bomba(intentos));




// EJERCICIO 2

for(let i=0;i<=100;i+= 10){
   console.log(i); 
}


for(let x=100;x>=0;x-=25){
    console.log(x); 
 }


function bomba(intentos){
    const password=Math.round(Math.random()*10);
    console.log(password);
    for(let i=intentos;i>0;i--) {
        const intento=+prompt("Escoge un numero del 0 al 10: ");
        if(isNaN(intento)){
            console.log("eso no es un numero");
            continue
        }
        if(intento ===password){
            return "Desactivaste bomba";
        }
        if(intento>password){
            console.log("La contraseña es un numero inferior");
        }else{
            console.log("La contraseña es un numero mayor");

        }
        console.log(`Te quedan ${i-1} intentos`);
    }
    return "BOOOOOOM!!!";
}
bomba(5);