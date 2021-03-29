'use strict'

let cantidad=prompt("Introduce una cantidad: ");
let divisa=prompt("Introduce un tipo de moneda: ");

/* if(typeof+cantidad==='number){ */
if(!isNaN(cantidad)){
    if(divisa==='dolares'){
        console.log(`${cantidad}€ es equivalente a ${cantidad * 1,5} dolares`);
    }else if(divisa ===`libras`){
        console.log(`${cantidad}€ es equivalente a ${cantidad * 0,5} libras`);
    }else if(divisa==='yenes'){
        console.log(`${cantidad}€ es equivalente a ${cantidad * 100} yenes`);
    }else{
        console.log("No reconozco ninguna moneda")
    }
}else{
    console.log("No es un numero,por favor introduce un numero");
}