'use strict'

// let cantidad=prompt("Introduce una cantidad: ");
// let divisa=prompt("Introduce un tipo de moneda: ");

// /* if(typeof+cantidad==='number){ */
// if(!isNaN(cantidad)){
//     if(divisa==='dolares'){
//         console.log(`${cantidad}€ es equivalente a ${cantidad * 1,5} dolares`);
//     }else if(divisa ===`libras`){
//         console.log(`${cantidad}€ es equivalente a ${cantidad * 0,5} libras`);
//     }else if(divisa==='yenes'){
//         console.log(`${cantidad}€ es equivalente a ${cantidad * 100} yenes`);
//     }else{
//         console.log("No reconozco ninguna moneda")
//     }
// }else{
//     console.log("No es un numero,por favor introduce un numero");
// }


function conversor(cantidad,divisa){
    if(isNaN(cantidad,divisa)){
        return "Cantidad no valida";
    }
    let multiplicador;

    switch(divisa){
        case "dolares":
            multiplicador=1.5;
            break;
        case "libras":
            multiplicador=0.5;
            break;
            case "libras":
                multiplicador=100;
                break;
            default:
                return "Divisa no valida";
                break;
    }
    return `${cantidad}€ EQUIVALEN A ${cantidad*multiplicador} ${divisa}`;
}
console.log(conversor(prompt("Introduce la cantidad:"),prompt(" introduce la divisa de destino")));