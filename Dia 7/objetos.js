"use strict";

//OBJETOS
// Coleccion de datos relacionados entre si
// Los datos se guardan en parejas de key (clave) y value (valor)
// Cada pareja es un entry (entrada); 

/* [] <=array */
/* {} <=objeto */

const miArray=["leche","huevos","patatas","harina"];

const miObject={
    0:"leche",
    2:"patatas",
    1:"huevos",
    3:"harina",
};

const user={
    name:"zoe",
    email:"algo@gmail.com"
    }

    console.log(miArray);
    console.log(miObject);


    console.log("////");
    console.log(user.key);
    console.log(user["key"]);
    console.log(user.email);
    console.log(user["email"]);
    console.log("////");

    console.log(miArray[1]);
    console.log(miObject[1]);

    console.log(user.email);

    let key="email";
    console.log(user.key);
    console.log(user.email);


    // for......of para arrays
    // for......in para objetos

    for(const key in user){
        console.log(user[key]);
    }
    user.petName="Nymeria";

    console.log(user);

    user.name="Maria";

    console.log(user);



    // clonar objetos
    const copiaUser={...user};

    console.log(copiaUser);
    console.log(copiaUser===user);

    console.log(copiaUser);
    console.log(copiaUser.name);


// EJERCICIO
/*  Crear una funcion que recibe dos objetos y comprueba si son iguales */
console.log("EJERCICIO");
const objeto1 = {
    a: 3,
    b: "hola",
    c: "adios",
  }
  
  const objeto2 = {
    b: 'hola',
    a: 3,
    c: 'adios',
  };
  
  const objeto3 = {
      a: 4,
      c: 'adios',
      b: 'hola',
      
  };

  const objeto4 = {
    a: 3,
    b: "hola",
    c: "adios",
    d:5,
  }

  const objeto5 = {
    a: 3,
    b: "hola",
    d: "adios",
  }

  
  

function sonIguales(objetoA,objetoB){ 
    console.log(Object.keys((objetoA),length));//---Lo que mide el objeto A
    if(Object.keys(objetoA).length !== Object.keys(objetoB),length){
        return false;
    }
    for(const key in objetoA){
        if( objetoA[key]===objetoB[key]){
            return false;  
        }  
    }   
    return true;
}

console.log(sonIguales(objeto1, objeto2)); // deberia dar true
console.log(sonIguales(objeto1, objeto3)); // deberia dar false
console.log(sonIguales(objeto1, objeto4)); // deberia dar false
console.log(sonIguales(objeto1, objeto4)); // deberia dar false


console.log("APUNTES");
// METODOS DE OBJETO
// VALUES
// Dvuelve un array con los valores del objeto

console.log("values: ",Object.values(user));
/* Al ser un array con las claves del objeto */

// Keys
// devuelve un array con las claves del objeto
console.log("keys: ",Object.keys(user));

// Entries
// devuelve un array de arrays en los que la primera posicion es la
// clave,y la segunda el valor

console.log("entries: ",Object.entries(user));


// EJERCICIOS
/*
 *
 * - Crea el objeto coche y asígnale las propiedades modelo, marca y color.
 *
 * - Muestra el objeto por medio de un "console.log".
 *
 * - Modifica el valor de la propiedad color y agrega la propiedad año de
 *   matriculación.
 *
 * - Utiliza un "confirm" para mostrar por consola las propiedades, o los
 *   valores. Si la persona acepta el "confirm" se mostrarán las propiedades,
 *   de lo contrario, se mostrarán los valores.
 *
 */
/*
 */
console.log("////");
console.log("Ejercicio coche");
const coche ={
    modelo:"Ford",
    marca:"Orion",
    color:"Rojo",
};


console.log(coche);


// for(const key in coche){
//     console.log(coche[key]);
// }
coche.color="Granate";

coche.matriculacion="0339";

console.log(coche);


let opcion=confirm("Confirma para mostrar propiedades,de lo contrario se mostraran los valores");
if(opcion===true){
    console.log("Propiedades: ",Object.keys(coche));
}else{
    console.log("Valores: ",Object.values(coche));
}




 /* Tenemos 3 equipos de baloncesto. Estos son los resultados de cada equipo
 * en los últimos 4 partidos:
 *
 *      - Equipo A: 35, 46, 29, 58
 *      - Equipo B: 46, 72, 26, 36
 *      - Equipo C: 38, 62, 47, 44
 *
 * Muestra por consola el equipo con la mejor media en estos cuatro partidos.
 * Debes mostrar el nombre del equipo y la media de dicho equipo.
 *
 */

console.log("////");
console.log("Ejercicio equipos");
 const equipoA = {
    partido1: 35,
    partido2: 46,
    partido3: 29,
    partido4: 58,
  
};
const equipoB = {
    partido1: 46,
    partido2: 72,
    partido3: 26,
    partido4: 36,
  
};
const equipoC = {
    partido1: 38,
    partido2: 62,
    partido3: 47,
    partido4: 44,
  
};

let suma=0;
let promedioA=0;
let promedioB=0;
let promedioC=0;

for(const key in equipoA){
    suma=(equipoA.partido1)+(equipoA.partido2)+(equipoA.partido3)+(equipoA.partido4);
    promedioA=suma/4;
    console.log("Media del equipo A= " + suma/4);
}

for(const key in equipoB){
    suma=(equipoB.partido1)+(equipoB.partido2)+(equipoB.partido3)+(equipoB.partido4);
    promedioB=suma/4;
    console.log("Media del equipo B= " + suma/4);
    
}

for(const key in equipoC){ 
    suma=(equipoC.partido1)+(equipoC.partido2)+(equipoC.partido3)+(equipoC.partido4);
    promedioC=suma/4;
    console.log("Media del equipo C= " + suma/4);

}


if ( promedioA > promedioB && promedioA > promedioC) {
    console.log("El equipo A tiene mayor media de puntos")
}else if (promedioB > promedioC){
    console.log("El equipo B tiene mayor media de puntos")
}else{
    console.log("El equipo C tiene mayor media de puntos")
}




console.log("segunda version");

function average(scores){/* funcion que haga medias */
    let total=0;
    for(cont score of scores){
        total+=score;
    }
    const average=total/scores.length;
    return average; 
}

function addAverage(teams){/* funcion que añade media a cada equipo */
    for(conts team of teams){
        team.average=average(team.scores);
        
    }
    return teams;
}

// addAverage(equipos);

function findBest(teams){/* funcion que le paso equipos y añade la media de cada uno y luego mira cual tiene la media mas alta */
    addAverage(teams)
    let best=teams[0];

    for(const team of teams){
        if(team.average>best.average){
            best=team;
        }
    }

    return best;

}
console.log(equipos);

const bestTeam=findBest(equipos);
consdole.log(bestTeam.name,bestTeam.average);




