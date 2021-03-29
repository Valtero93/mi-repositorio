'use strict'

function myFunction(){
    // console.log("Se está ejecutando la funcion");
    // return "hola";
    return 4 + 5;
}


console.log(myFunction());
console.log(myFunction);

let funcionAnonima=function(){
    console.log("funcion anonima");
}

funcionAnonima();


function eco(mensaje){
    console.log(mensaje);
}
eco("hola");


function suma (a,b){
    return a+b;
}
console.log(suma(4,5));
console.log(suma(2,6));
console.log(suma(suma(2,8),suma(5,12)));

function test(){
    console.log("console.log en funcion");
    return "resultado de la funcion";
}

console.log(test());
function isAdult(age){
    if(age >= 19){
        return "es mayor que edad"
    }else{
        return "Es menos de edad"
    }

    }
    console.log(isAdult(15));
    console.log(isAdult(19));

    
    function isAdult2(age){
        if(age >=18){
            return "es mayor de edad";
        }
        return "es menor de edad";
    }
    console.log(isAdult(15));
    console.log(isAdult(19));







// let numero1=prompt("Introduce el primer numero: ");;
// let numero2=prompt("Introduce tel segundo numero: ");;
// let tipoCalculo=prompt("Introduce el tipo de operacion: ");
// function suma (numero1,numero2){
//     return numero1+numero2;
// }
// function resta(numero1,numero2){
//     return numero1-numero2;
// }
// function multiplicar (numero1,numero2){
//     return numero1*numero2;
// }
// function dividir(numero1,numero2){
//     return numero1/numero2;
// }
// function potencia(numero1,numero2){
//     return numero1**numero2;
// }
// console.log(tipoCalculo(numero1,numero2));



let resultado;
function calculadora(numA,numB,option){
    switch(option){
        case "+":
            return resultado=numA+numB
            // break;
        case "-":
            return resultado=numA-numB
            // break;
        case "*":
            return resultado=numA*numB
            // break;
        case "/":
            return resultado=numA/numB
            // break;
        case "**":
            return resultado=numA**numB
        default:
            console.log("Operacion introducida no valida");
            // return "Operacion no valida"
    }
    // console.log(resultado);
    return resultado;
}

console.log(rompt("Introduce el primer numero: "),prompt("Introduce tel segundo numero: "),prompt("Introduce el tipo de operacion: "))
calculadora(3,5,"/");
calculadora(prompt("Introduce el primer numero: "),prompt("Introduce tel segundo numero: "),prompt("Introduce el tipo de operacion: "))




/* FUNCIONES IMPURAS */
let miNumero=4;
function dobleImpura(){
    return miNumero*2;
}
console.log(dobleImpura());
miNumero=8;
console.log(dobleImpura());


/* FUNCION PURA */
function doblePura(miNumero) {
      return miNumero*2;  
}
console.lof(doblePura(miNumero));
miNumero=4;

console.log(doblePura(miNumero));
console.log(doblePura(5));