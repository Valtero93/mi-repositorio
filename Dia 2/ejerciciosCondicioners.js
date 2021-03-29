'use strict'

let cantidad=5;
let moneda='dolares';

if(moneda==='dolares'){
    console.log(`${cantidad}€ es equivalente a ${cantidad * 1,5} dolares`);
}else if(moneda ===`libras`){
    console.log(`${cantidad}€ es equivalente a ${cantidad * 0,5} libras`);
}else if(moneda==='yenes'){
    console.log(`${cantidad}€ es equivalente a ${cantidad * 100} yenes`);
}else{
    console.log("No reconozco ninguna moneda")
}


switch(moneda){
    case 'dolares':
        console.log(`${cantidad}€ es equivalente a ${cantidad * 1,5} dolares`);
        break;

    case 'libras':
        console.log(`${cantidad}€ es equivalente a ${cantidad * 0,5} libras`);
        break;
    case 'libras':
        console.log(`${cantidad}€ es equivalente a ${cantidad * 100} yenes`);
        break;
    case 'libras':
        console.log("No reconozco ninguna moneda")
        break;
}


let animal="perro";
switch(animal){
    case"perro":
    console.log("tiene 4 patas");
    break;
    case"gato":
    console.log("tiene 4 patas");
    break;
    case"pulpo":
    console.log("tiene 8 patas");
    break;
    case"arañas":
    console.log("tiene 8 patas");
    break;
    default:
    console.log("no conozco ese animal");
    break;
}
    


let foo=0;
let output="Output:";
switch(foo){
    case 0:
     output +="So";
    case 1:
    output +="What";
    output +="Is";
    case 2:
        output +="Your";
    case 3:
        output +="Name";
    case 4:
        output +="?";
        console.log(output);
        break;
    case 5:
       output+="!";
       console.log(output);
       break;
    default:
        console.log("Elije un numero de 0 a 5");
}



let numeroA=20;
let numeroB=10;
let option="resta"
if(numeroA>=numeroB){
    if(option==="suma"){
        console.log("La suma es ="+ (numeroA+numeroB));
    }else if(option==="resta"){
        console.log("La resta es ="+ (numeroA-numeroB));
    }else if(option==="multiplicar"){
        console.log("La multiplicacion es ="+ (numeroA*numeroB));
    }else if(option==="dividir"){
        console.log("La division es ="+ (numeroA/numeroB));
    }else if(option==="potencia"){
        console.log("A elevado a B es ="+ (numeroA**numeroB));
    }else{
        console.log("No reconozco ese comando")
    }
}else{
    console.log("El primer numero no puede ser menor que el segundo");
}

let numero1=20;
let numero2=10;
let option2="multiplicar"
if(numeroA>=numeroB){
    switch(option2){
        case"suma":
        console.log("La suma es ="+ (numero1+numero2));
        break;
        case"resta":
        console.log("La resta es ="+ (numero1-numero2));
        break;
        case"multiplicar":
        console.log("La multiplicacion es ="+ (numero1*numero2));
        break;
        case"dividir":
        console.log("La division es ="+ (numero1/numero2));
        case"potencia":
        console.log("A elevado a B es ="+ (numero1**numero2));
        break;
        default:
        console.log("no conozco ese comando");
        break;
    }
}else{
    console.log("El primer numero no puede ser menor que el segundo");
}




