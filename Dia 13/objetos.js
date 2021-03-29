"use strict"

//Clases parte 2,ejercicio
class CajaFuerte {
    #password;
    #contenido;
    constructor(pass, contenido) {
        (this.#password = pass), (this.#contenido = contenido);
    }

    abrir(pass) {
        if (pass === this.#password) {
            return this.#contenido;
        } else {
            return 'no tienes permiso para abrir';
        }
    }
}

const miCaja = new CajaFuerte(4444, 'esto es super privado');

console.log(miCaja.abrir(4444));

class Personaje {
    vida = 100;
    ataque = 10;
    posicionX = 50;
    constructor(nombre) {
        this.nombre = nombre;
    }
    atacar(objetivo) {
        objetivo.vida -= this.ataque;
    }
    moverDerecha() {
        psicionX++;
    }
    moverIzquierda() {
        posicionX--;
    }
}

class Protagonista extends Personaje {
    constructor(name) {
        super(name);
        this.nombre += ' el héroe';
    }

    curarse() {
        this.vida += 10;
    }
}

class Enemigo extends Personaje {
    constructor(name, vida, ataque) {
        super(name);
        this.nombre += ' el villano';
        this.vida = vida;
        this.ataque = ataque;
    }
}

const miPersonaje = new Protagonista('Zoe');

const enemigo1 = new Enemigo('Rick', 80, 15);
const enemigo2 = new Enemigo('Morty', 40, 5);

console.log(miPersonaje);
console.log(enemigo1);
console.log(enemigo2);

console.log('Zoe ataca a Rick');
miPersonaje.atacar(enemigo1);

console.log(enemigo1);
console.log(enemigo2);

console.log('Rick ataca a Zoe');
enemigo1.atacar(miPersonaje);

console.log(miPersonaje);

console.log('Zoe se cura');
miPersonaje.curarse();

console.log(miPersonaje);

console.log('Morty ataca a Zoe');
enemigo2.atacar(miPersonaje);
console.log(miPersonaje);



const test = [];

test.push(new CajaFuerte());

console.log(test);


////Ejercicio
/*
  Vamos a hacer dos classes una para representar zorros y otra para representar gallinas
  Vamos a tener una clase más que representa una granja

  Cuando construimos la granja le pasamos siempre un array de dos animales
  los animales pueden ser zorros o gallinas

  Cuando paso dos gallinas o dos zorros y cierro la puerta de la granja este metodo me devuelve
  tres gallinas o tres zorros respectivamente. Los animales originales siguen, pero el que han criado
  es una nueva referencia.

  Cuando paso un zorro y una gallina o una gallina y un zorro, al cerrar la puerta el metodo me 
  devuelve solo un zorro. Tiene que ser el mismo zorro que ha entrado.

  El metodo de cerrar la puerta siempre devuelve un array

  Metodos que van a tener las clases:
  -Constructor - Todas (para los animales no es necesario, pero si recomendable, para darles un 
    nombre y saber que son los mimos)
  -Criar - zorros y gallinas
  -Comer - zorros y admite de parametro un array de animales
  -Cerrar puerta - Solo la granja
  */


  function isZorro(animal){
      return animal instanceof Zorro;
  }
  function isGallina(animal){
    return animal instanceof Gallina;
}

  class Granja {
    constructor(animales) {
        this.animales = animales;

    }
    cerrarPuerta(){
        const todosGallinas=this.animales.every((animal)=>isGallina(animal));
        const todosZorros=this.animales.every((animal)=>isZorro(animal));
        if(todosGallinas || todosZorros){
            this.animales.push(this.animales[0].bread());
        }else{
            const zorro=this.animales.find(animal=>isZorro(animal));
            this.animales=zorro.eat(this.animales);
        }
    }

    abrirPuerta(){
        return this.animales;
    }
  }


class Zorro{
    constructor(name){
        this.name=name;
    }

    eat(animales){
        return animales.filter(animal=>isZorro(animal));

    }
    bread(){
        return new Zorro("cria");
    }
}

class Gallina{
    constructor(name){
        this.name=name;
    }
    bread(){
        console.log("Las gallinas estan criando");
        return new Gallina("cria");
    }
}

// class Animal{

//     constructor(name){
//         this.name=name;

//     }

//     bread(){

//     }
// }


const animales=[new Gallina("Lola"),new Zorro("Pepe")];

const miGranja=new Granja(animales);

miGranja.cerrarPuerta();
console.log(miGranja.abrirPuerta());


