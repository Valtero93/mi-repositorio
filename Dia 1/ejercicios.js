'use strict';

// OPERADORES
//  Operadores binario o aritmeticos
// para realizar operaciones matematicas
// Necesitan dos valores para funcionar

// a+b 
// a-b
// a*b
// a/b
// a%b DEVUELVE EL RESTO DE DIVIDIR A/B
// a**b a elevedado a b
// a+=b a=a+b
// a-=b a=a-b
// a*=b 
// a/=b 
// a%=b 

// a++ a=a+1
// a-- a=a-1

let a=3;
let b=2;
a +=b;

console.log(a);

// OPERADORES LOGICOS
// para comparar o evaluar valores

//a ===b comparacion estricta
console.log(2=='2');
console.log(2 ==='2');
//a !==b
console.log('distinto con coercion', 2 !='2');
console.log('distinto ogial estricto', 2 !=='2');


// a>b mayyor estricto

console.log('mayor', 2>2);

// a<b estricto
console.log('distinto con coercion', 2<2);

// a>=b mayyor o igual
console.log('distinto con coercion', 2 >=2);

// a<= b menor o igual
console.log('distinto con coercion', 2 <=2);

// a && b AND devuelve true si TODOS los valores son true
console.log('true && true', true && true);
console.log('true && false', true && false);
console.log('true && true', true && true);
console.log('true && true', true && false);

// a || b OR devuelve true si ALGUN valor es true
// !a negacion,devuelve el valor booleano opuesto
// +a transforma a numero

console.log(2*'2');
console.log(2+'2');
console.log(1+'2'+1);
console.log(1+1+'2');

// CONVERSION