// OPERADOR TERNARIO

// condicion? resultado si es true: resultado si es false
let num=5;
if(5%2==0){
    console.log("es par");
}else{
    console.log("es impar");
}

num % 2 === 0? console.log("es par"): console.log("es par");
console.log(num % 2===0 ? "es par" : "es impar");

let esPar=num % 2 === 0 ?esPar: "es impar";
console.log(esPar);