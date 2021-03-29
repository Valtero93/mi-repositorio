"use strict";

let edad=prompt("Introduce tu edad: ");
console.log(edad >= 18? "mayor de edad":"menor de edad");

console.log(`Tienes ${edad} años`);

confirm("Tienes más de 18 años");



if(confirm("Tienes más de 18 años")){
    console.log("Puedes pasar");
}else{
    console.log("No puedes pasar")
}



const nombre=prompt("Introduce tu nombre: ");
const apel1=prompt("Introduce tu primer apellido: ");
let cafe=prompt("Le apetece tomar un café? ");
if(cafe="si"){
    console.log("Bienvenido señor "+nombre+" "+apel1+" aqui tiene su café");
}else /*  if(cafe="no")*/{
    console.log("Bienvenido señor "+nombre+" "+apel1+" esperamos que venga otro dia entonces");
}








