'use strict';

// CONDICIONES

// Sentencias if

let edad=18;

console.log(edad >=18);

if (edad>=18){
    console.log('la condicion se cumple');
}else{
    console.log('la condicion no se cumple')
}

//Truthy o falsy
// Todo evalua a true,excepto false,0,null,undefined,NaN...

let usuario="Zoe";
console.log(!!usuario);

if(usuario){
    console.log("bienvenid@ "+ usuario);
}else{

console.log("No estas logeado")
}

let booleanoComplejo=true && !false || (true && false && !(false || false));


// else if


if (edad<18){
    console.log('es mayor de edad');
}else if(edad>18 && edad<70){
    console.log("Esta en edad de trabajar");
}else{
    console.log('Esta jubilado')
}


const hora=14;
if (hora<=13){
    console.log('buenos dias');
}else if(hora>13 && hora<=20){
    console.log("Buneas tardes");
}else{
    console.log("Buenas noches");
}



