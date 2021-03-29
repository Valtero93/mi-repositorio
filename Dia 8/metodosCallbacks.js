'use strict';

////// METODOS DE ARRAY CON CALLBACKS /////
const numeros = [4, 9, 2, 6, 4, 5];

const equipos = [
    {
        name: 'Equipo A',
        scores: [35, 46, 29, 58],
    },
    {
        name: 'Equipo C',
        scores: [38, 62, 47, 44],
    },
    {
        name: 'Equipo B',
        scores: [46, 72, 26, 36],
    },
];


//// MAP
/// Devulevo un nuevo array SIEMPRE DEL MISMO TAMAÑO que el original,
/// pero transformado según el callback
console.log('MAP');

/* for (const numero of numeros) */

const numerosMasUno = numeros.map((numero) => numero + 1);

console.log(numeros);
console.log(numerosMasUno);

console.log(numeros.map(() => Math.random()));
console.log(numeros.map((numero, index) => 'hola' + index));
numeros.map((numero, index, array) => {
    console.log(array[index]);
});

console.log(equipos.map((equipo) => equipo.name));

console.log("pacientes");
const patients = [true, false, true, false, false, false, true, true];

const infectados = patients.map((paciente, index, array) => {
    if (array[index - 1] || array[index + 1]) {
        return true;
    }
    return paciente;
});

const infectados2 = infectados.map((paciente, index) => {
    if (patients[index] /* ===true */) {
        return false;
    }
    return paciente;
});

console.log(patients);
console.log(infectados);
console.log(infectados2);


/////FILTER
/// Devuelve un nuevo array SIEMPRE IGUAL O MAS PEQUEÑO que el original,
/// dejando fuera lo que no cumpla la condicion, sin modificar los que se quedan
/// (el callback debe devolver un booleano)

console.log('FILTER');

const pares = numeros.filter((numero) => numero % 2 === 0);
const mayoresDe4 = numeros.filter((numero, index) => {
    if (numero > 4) {
        console.log(index);
        return true;
    }
    return false;
});
const strings = numeros.filter((numero) => typeof numero === 'string');
const nueve = numeros.filter((numero) => numero === 9);

console.log(numeros);
console.log(pares);
console.log(mayoresDe4);
console.log(strings);
console.log(nueve);


///// REDUCE
/// Devulve un unico elemento
//Dicho elemento puede ser un numero, un string, un array, un objeto, un booleano...
// Lo que devuelve es lo que quede en el acumulador al termnar de recorrer el array

console.log('REDUCE');
const total = numeros.reduce((acc, num) => acc + num);
const numerosConcatenados = numeros.reduce((acc, num) => acc + num, '');

console.log(total);
console.log(numerosConcatenados);

equipos.map((equipo) => {
    equipo.total = equipo.scores.reduce((acc, num) => acc + num);
});

const totalEquipos = equipos.reduce((acc, equipo) => acc + equipo.total, 0);

console.log(equipos);
console.log(totalEquipos);

const todosPares = numeros.reduce((acc, num) => {
    return num % 2 === 0 && acc;
}, true);

console.log(todosPares);


///// SOME
//// devulve true si ALGUNO de los elementos coincide con la condicion del callback

console.log('SOME');
const algunPar = numeros.some((numero) => numero % 2 === 0);

console.log(algunPar);

const algunEquipoA = equipos.some((equipo) => equipo.name === 'Equipo A');
const algunEquipoD = equipos.some((equipo) => equipo.name === 'Equipo D');
const algunEquipoConMasDe200 = equipos.some((equipo) => equipo.total > 200);

console.log(algunEquipoA);
console.log(algunEquipoD);
console.log(algunEquipoConMasDe200);


//// EVERY
//// Devuelve true si TODOS los elementos cumplen la condicion del callback
console.log('EVERY');

const everyPares = numeros.every((numero) => numero % 2 === 0);

const todosMenosDe200 = equipos.every((equipo) => equipo.total < 200);

console.log(everyPares);
console.log(todosMenosDe200);


///// FIND
/// Devuelve el valor del primer elemento que cumpla la condicion
/// para sacar el indice usaríamos findIndex
console.log('FIND');
const primerImpar = numeros.find((numero) => numero % 2 !== 0);
const indicePrimerImpar = numeros.findIndex((numero) => numero % 2 !== 0);
const primerNueve = numeros.findIndex((numero) => numero === 9); // equivalente a numeros.indexOf(9)

console.log(primerImpar);
console.log(indicePrimerImpar);
console.log(primerNueve);


////  SORT
//Ordena EL ARRAY original
//El comportamiento por defecto es ordenar segun su orden alfanumerico
//se puede aplicar otro criterio de ordenacion pasandole una funcion
//la funcion admite 2 parametros(posicion actual y la siguiente)
//si devuelve menos de 0,se quedan como estan
//si devuelve mas de cero,se intercambian
console.log("SORT");
const numerosOrdenados=[...numeros].sort((a,b)=> a-b);//comportamiento normal,orden ascendente
console.log(numerosOrdenados);

const numerosDescendiente=[...numeros].sort((a,b)=> b-a);//orden descendente
console.log(numerosDescendiente);

const equiposOrdenados=[...equipos].sort((a,b)=>a.total-b.total);//Ordenacion normal
console.log(equiposOrdenados);




// Transfomar el array de animales para que ponga el sonido que hacen * en el lugar del nombre del animal 
// Obtener un array nuevo em el que solo haya gatos(a partir del array de animales)
// Obtener un array en el que no haya perros(a partir del array de animales)
// Obtener el total de perros
const animales = ["perro", "gato", "pajaro", "gato", "gato", "pajaro "," perro "]
//animales.map(animales);
const sonidos=animales.map((animal)=>{
switch(animal){
    case "perro":
    return "guau";

    case "gato":
    return "miau";

    case "pajaro":
    return "piopio";
}
});

console.log(animales);
console.log(sonidos);

const soloGatos=animales.filter((animal)=>animal==="gato");
console.log(soloGatos);

const sinPerros=animales.filter((animal)=>animal!=="perro");
console.log(sinPerros);

const totalPerros=animales.reduce((acc,animal)=>{
    if(animal=="perro"){
        acc++;
    }
    return acc;
},0);

console.log(totalPerros);
const totalPerrosLogico=animales.filter((animal)=>animal==="perro").length;
console.log(totalPerrosLogico);



console.log("Ejercicio infectador por paises");

const persons = [
    {
        name: 'Pedro',
        age: 35,
        country: 'ES',
        infected: true,
        pet: 'Troski',
    },
    {
        name: 'Elisabeth',
        age: 14,
        country: 'UK',
        infected: true,
        pet: 'Firulais',
    },
    {
        name: 'Pablo',
        age: 25,
        country: 'ES',
        infected: false,
        pet: 'Berritxu',
    },
    {
        name: 'Angela',
        age: 18,
        country: 'DE',
        infected: false,
        pet: 'Noodle',
    },
    {
        name: 'Boris',
        age: 50,
        country: 'UK',
        infected: true,
        pet: 'Leon',
    },
    {
        name: 'Donald',
        age: 69,
        country: 'US',
        infected: false,
        pet: 'Pence',
    },
];
const pets = [
    {
        name: 'Troski',
        animal: 'perro',
    },
    {
        name: 'Firulais',
        animal: 'perro',
    },
    {
        name: 'Berritxu',
        animal: 'loro',
    },
    {
        name: 'Noodle',
        animal: 'araña',
    },
    {
        name: 'Leon',
        animal: 'gato',
    },
    {
        name: 'Pence',
        animal: 'perro',
    },
];
const animals = [
    {
        name: 'perro',
        legs: 4,
    },
    {
        name: 'araña',
        legs: 8,
    },
    {
        name: 'gato',
        legs: 4,
    },
    {
        name: 'loro',
        legs: 2,
    },
    {
        name: 'gallina',
        legs: 2,
    },
];
// Población en millones
const countries = [
    {
        code: 'CN',
        name: 'China',
        population: 1439,
        infected: 81999,
    },
    {
        code: 'US',
        name: 'Estados Unidos',
        population: 331,
        infected: 112468,
    },
    {
        code: 'DE',
        name: 'Alemania',
        population: 83,
        infected: 56202,
    },
    {
        code: 'ES',
        name: 'España',
        population: 46,
        infected: 72248,
    },
    {
        code: 'UK',
        name: 'Reino Unido',
        population: 67,
        infected: 17301,
    },
];
/**
 * EJERCICIOS
 */
// Número total de infectados (del array de personas)
// Número total de sanos (del array de personas)
// Numero total de infectados en los países (del array de países)

console.log("1-Número total de infectados (del array de personas)");
//const totalInfectados = persons.reduce((acc, person) => (person.infected ? acc++ : acc),0);
const totalInfectados=persons.reduce((acc,person) =>{
    if(person.infected){
        acc++;
    }
    return acc;
},0);

console.log("Total de personas infectadadas: ", totalInfectados);




console.log("2-Número total de sanos (del array de personas)");
const totalSanos=persons.reduce((acc,person)=>{
    if(!person.infected){
        acc++;
    }
    return acc;
},0);
console.log("Total de personas sanas: ", totalSanos);




console.log("3-Numero total de infectados en los países (del array de países)");
const totalInfectadosPaises=countries.reduce((acc,country)=>acc+country.infected,0);
console.log("Total infectados paises: ",totalInfectadosPaises);


// País con más infectados (del array de países) 
// Número de total de infectados del array de personas 
// Array con nombre de todas las mascotas



console.log("4-País con más infectados (del array de países) ");
// País con más infectados (del array de países) 
const paisMasInfectado = countries.reduce((acc,country)=>{
    if(country.infected > acc.infected){
        acc=country;
    }
    return acc;
});
console.log("Pais con mas infectado: ",paisMasInfectado.name);




console.log("5-Array con nombre de todas las mascotas");
// Array con nombre de todas las mascotas
const nombresMascotas=pets.map((pet) => pet.name);
console.log("Array con nombres de mascotas:  ",nombresMascotas);;




console.log("6-Array con las personas infectadas del array personas ");
// Array con las personas infectadasd del array personas
const nombresInfectados = persons.filter((nombre) => nombre.infected===true);
console.log("Nombres de personas infectadas: ",nombresInfectados);




console.log("7-Array de españoles con perro");
// Array de españoles con perro

// const personasConAnimal=personas.map((person)=>{
//     const mascotas=pets.find((pet)=>pet.name===person.pet);
//     person.animal=mascota.animal;
//     return person;
// });
// const espanolesConPerrro=personasConAnimal.filter((person)=>person.country==="ES" && person.animal==="perro")
const espanolesConPerro=persons.filter((person)=>{
    const mascota=pets.find((pet) => pet.name===person.pet);
    return person.country==="ES" && mascota.animal==="perro";
})
console.log(espanolesConPerro);




console.log("8-Array con las personas y el objeto de la persona tiene a mayores todos los datos de su mascota");
// Array con las personas y el objeto de la persona tiene a mayores todos los datos de su mascota
const personasConMascotas=persons.map((person)=>{
    const personCopy={...person};
    let mascota=pets.find((pet)=>pet.name===person.pet);
    const animal=animals.find((animal) => animal.name===mascota.animal);
     mascota.legs=animal.legs;
     personCopy.pet=mascota;

    return personCopy;
});
console.log("personas con su mascota : ",personasConMascotas);



console.log("9-Número total de patas de las mascotas de las personas");
// Número total de patas de las mascotas de las personas
// const totalPatas=animals.reduce((acc,patas)=>acc+patas.legs,0);
// console.log("Total de patas: ",totalPatas);
function reducer(acc,person){
    const mascota=pets.find((pet)=>pet.name===person.pet);
    const animal=animals.find((animal)=>animal.name===mascota.animal);
    const patas=animal.legs;
    return acc+patas;
}
const totalPatas=persons.reduce(reducer,0);
console.log("total de patas : ",totalPatas);



console.log("10-Array con las personas que tienen animales de 4 patas");
// Array con las personas que tienen animales de 4 patas
const personasConCuadrupedos = persons.filter((person) => {
    const cuadrupedo=pets.find((pet) => pet.name===person.pet);
    const animal=animals.find((animal)=>animal.name===cuadrupedo.animal);
    const patas=animal.legs;
    // return pets.animal==="perro" && pets.animal==="gato";
    if(patas===4){
        return true;
    }

});
console.log("Personas con animales cuadrupedos: ",personasConCuadrupedos);



console.log("11-A partir del string 'España' obtener un array de personas no infectadas de ese país");
// A partir del string 'España' obtener un array de personas no infectadas de ese país
function filtrador(person){
    const pais=countries.find((country)=>country.name==="España");
    const codigo=pais.code;

    const esEspañol=person.country===codigo;
    return esEspañol && !person.infected;
}
const sanosEspaña=persons.filter(filtrador);
 console.log("Personas NO infectadas en España : ",sanosEspaña)



console.log("12-Array de paises que tienen personas con loros como mascota");
// Array de paises que tienen personas con loros como mascota
function filterPersonLoro(person) {
    const mascota = pets.find((pet) => pet.name === person.pet);
    const animal = mascota.animal;
    return animal === 'loro';
}

function filterCountryLoros(country) {
    const personasConLoro = persons.filter(filterPersonLoro);
    return (
        'algun pais coincide?: ',
        personasConLoro.some((persona) => {
            return persona.country === country.code;
        })
    );
}

const paisesConLoro = countries.filter(filterCountryLoros);

console.log('paises con personas con loro: ', paisesConLoro);


console.log("13-Numero de infectados totales (los del objeto del país) de los paises con mascotas de ocho patas");
// Numero de infectados totales (los del objeto del país) de los paises con mascotas de ocho patas
//funcion para el filtro de personas
function filtroPersonas8patas(person) {
    //buscamos en el array de mascotas el objeto de la mascota de cada persona
    const mascota = pets.find((pet) => pet.name === person.pet);

    //buscamos en el array de animales el objeto de animal correspondiente a la mascota
    const animal = animals.find((animal) => animal.name === mascota.animal);

    //cogemos el dato del numero de patas del objeto animal
    const patas = animal.legs;

    // compruebo si son 8 patas
    const igual = patas === 8;

    //si son 8 patas, la persona pasa el filtro
    return igual;
}


const personas8patas = persons.filter(filtroPersonas8patas);

//funcion para el filtro de los paises
function filtroPaises8patas(country) {
    // cada pais pasa el filtro si el pais de alguna persona del array de personas ya filtrado
    //coincide con el codigo del pais
    return personas8patas.some((person) => person.country === country.code);
}

//creamos un array con los paises que pasann el filtro
const paises8patas = countries.filter(filtroPaises8patas);

// funcion para el reduce
function reducer(acc, country) {
    //suma al acumulador el numero de infectados de cada pais
    return acc + country.infected;
}

//apiclo el reduce al array e paises ya filtrados
//inicializando a 0 porque voy a sumar numeros
const infectados8patas = paises8patas.reduce(reducer, 0);

console.log('total infectados paises 8 patas: ', infectados8patas);




console.log("14-A partir de las personas sacar el animal que tienen más personas como mascota");
// A partir de las personas sacar el animal que tienen más personas como mascota

const listaMascotas = persons.reduce((lista, person) => {
    // busco el objeto de la mascota de cada persona en el array de mascotas
    const mascota = pets.find((pet) => pet.name === person.pet);

    //cojo el dato de que animal es del objeto mascota
    const animal = mascota.animal;

    //si el animal ya está en la lista, le añado 1 a su contador
    if (lista[animal]) {
        lista[animal]++;
    } else {
        //si no está en la lista, lo añado contando ya 1
        lista[animal] = 1;
    }

    console.log(lista);

    //devuelvo la lista
    return lista;
}, {}); //inicializo con un objeto vacío, que será mi lista

//convierto el objeto lista en un array de arrays para poder ordenar
//erdeno dicho array de forma descendente según la segunda (1) posición de cada elemento
//que corresponde al contador de cada animal
const listaOrdenada = Object.entries(listaMascotas).sort((a, b) => b[1] - a[1]);

//me quedo con el que quede de primero (0) en la lista
const animalPopular = listaOrdenada[0];

//cojo solo el nombre, que está en la primera (0) posicion
const popular = animalPopular[0];
console.log('la mascota que más personas tienen: ', popular);

