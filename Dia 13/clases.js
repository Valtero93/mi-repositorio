"use strict"

////CLASES

class Rectangulo {
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }
    claculateArea() {
        return this.alto * this.ancho;
    }
    saveArea() {
        this.area = this.alto * this.ancho;
    }
}

const miRectangulo = new Rectangulo(2, 4);
const miRectangulo2 = new Rectangulo(5, 3);

console.log(miRectangulo.claculateArea());

console.log(miRectangulo);

miRectangulo2.saveArea();
console.log(miRectangulo2);
console.log(miRectangulo2.area);

class SinConstructor {
    saludo = 'hola';
    #secreto = 'esto es privado';

    array = ['a', 'b', 'c'];

    /*   
  Si no tiene contructor explicicito, es como si tuviera:
  
  constructor(){

    } */

    static saludar() {
        console.log(this.saludo);
    }

    desvelarSecreto() {
        let secretoArray = this.#secreto.split('');
        let secretoCifrado = secretoArray.reverse().join('kjdvbk');
        return secretoCifrado;
    }

    get ultimo() {
        if (this.array.length === 0) {
            return undefined;
        }
        return this.array[this.array.length - 1];
    }

    set nuevo(elemento) {
        this.array.push(elemento);
    }
}

const instancia = new SinConstructor();
instancia.despedida = 'adios';

console.log(instancia.frase);
console.log(instancia.despedida);
console.log(instancia.desvelarSecreto()); // esto no se puede
/* instancia.#secreto = 'cambio el secreto'; */
console.log(instancia.ultimo);

instancia.nuevo = 'd';

console.log(instancia);

SinConstructor.saludar();

/* array.find(); //metdo de instancia
Math.random(); //metodo estático, no necesita instancia */

const instancia2 = new SinConstructor();
console.log(instancia2.despedida);
