"use strict"

'use strict';



//const { get } = require("browser-sync");

// Esto es una IIFE: expresión de función invocada inmediatamente
//¿En qué orden saldŕan los mensajes por consola?
(() => {
    console.log('1. Érase una vez...');

    setTimeout(() => {
        console.log('2. En un planeta de otra galaxia...');
    });

    setTimeout(() => {
        console.log('3. Un villano muy malvado...');
    }, 0);

    console.log('4. ¿Su objetivo?');

    console.log('5. ¡Conquistar el universo!');
})();

////Respuesta:
//1. Érase una vez...
//4. ¿Su objetivo?
//5. ¡Conquistar el universo!
//2. En un planeta de otra galaxia...
//3. Un villano muy malvado...



//hacemos fetch a una ruta para recibir toda la informacion que devuelve esa ruta
//fetch devuelve una promesa
fetch('https://rickandmortyapi.com/api')
    //cuando la promesa se resulve, obtenemos los datos en json y hay que transformarlos
    .then((response) => response.json())
    //.json() devuelve una promesa y hay que esperar a que se resuelva
    .then((data) =>
        //ya podemos usar los datos, y si tenemos una ruta, podemos volver a empezar haciendo  un nuevo fetch
        fetch(data.characters)
            .then((response) => response.json())
            .then((data) => console.log(data.results[0].name))
    );



////EJERCICIO
///// a partir de la ruta https://anapioficeandfire.com/api/houses/378 sacar
////todos los titulos del current lord de la casanop

const url='https://dog.ceo/api/breeds/list/all';
fetch(url)
.then((response)=>response.json())
.then((lista)=>console.log(lista.message));

const fetchPromise=fetch(url);

fetchPromise.then((response)=>{
    const json=response.json();
    json.then((data)=>console.log(data.message));

});
console.log("Antes de la funcion");

async function getList(url){
    const fetchResponse=await fetch(url);
    const json=await fetchResponse.json();
    console.log(json);
    const lista=json.message;
    return lista;

}

//getList(url)
getList(url).then((response)=>console.log(response));


function fetchData(url){
    return fetch(url.then((response)=>response.jsosn()));
}

fetch(url).then((response)=>{
    console.log(response);
});


////EJERCICIO
//a partit de 'https://dog.ceo/api/breeds/list/all' sacar una key para luego sacar algo de 'https://dog.ceo/api/breed/hound/list'
const urlLista='https://dog.ceo/api/breeds/list/all';
function fetchData(url){
    return fetch(url).then((response)=>response.json());//devuelve la promesa
}


async function getBreed(url){
    try{
        const respuesta=await fetchData(url);//resuelvo la promesa
        console.log(respuesta);
        const lista=respuesta.message;
        const raza=Object.keys(lista)[43];

        const respuestRaza=await fetchData(`https://dog.ceo/api/breed/${raza}/list`);

        const listaRaza=respuestRaza.message;
        //console.log(listaRaza);
        return listaRaza;
        //console.log(respuestRaza);
        console.log(listaRaza);
    }catch (e){
        console.log(e);
    }

}
getBreed(urlLista).then((result)=>console.log(result));


//try cacth
function tryCatch(){
    try{
        funcionQueNoExiste();
    }catch (error){

    }
}


function checkPassword(password){
    const pass=4;
    try{
        const userInput=prompt("Introduce la contraseña")
        if(+userInput !==password){
            throw new Error("Contraseña incorrecta");
        }
        console.log("correcto,has entrado");
    }catch (e){
        console.log(e.message);
    }
}
checkPassword(4);
console.log("fuera de la funcion");




//checkPasword(4)
function fetchData(url){
    return fetch(url).then((response) => response.json());
}

async function getBreed(){
    const raza="hound";
    const urlRaza=`https://dog.ceo/api/breed/${raza}/list`;

    const data=await fetchData(urlRaza);
    console.log(data.status);
    console.log(data.message);
}
getBreed();




//Ejercicio
// A partir de la url de raza (`https://dog.ceo/api/breed/${raza}/list`):
// Pedir al usuario que introduzca la raza a buscar
//Si la raza es correcta se muestra la lista de subrazas
//Si la raza no es correcta se muesta un mensaje de error indicándolo



async function getBreedList(){
    try{
    const raza=prompt("Introduce una raza : ");
    const respuesta=await fetchData(`https://dog.ceo/api/breed/${raza}/list`);
        if(respuesta.status==="error"){
            throw new Error("Raza no encontrada");
        }

        if(!respuesta.message.length){
            throw new Error("Esa raza no tiene subrazas");

        }

        console.log(respuesta.message);
    }catch(e){
        alert(e.message);
        if(confirm("volver a intentar?")){
            getBreedList();
        }
    }
}
getBreedList();
console.log("fuera de la funcion");



//Ejercicio
//https://anapioficeandfire.com/api/houses/378
// A partir de la ruta de la casa (`https://anapioficeandfire.com/api/houses/378`)
//Obtener el current lord y sacar por consola su nombre y sus títulos
// cada título se imprimirá en una linea diferente
//BONUS: podré pasar un número a la función y sacará los datos correspondientes a esa casa

console.log("Antes de la funcion");

// function getData(url){
//     return fetch(url).then(response=>response.json());
// }
// async function getCurrentLord(){
//     const houseUrl=`https://anapioficeandfire.com/api/houses/378/`;
//     const houseData=await getData(houseUrl);
//     const lordUrl=houseData.currentLord+'/';

//     const lordData=await getData(lordUrl);
//     const titulos=lordData.titles;
//     console.log('Nombre : ',lordData.name);

//     console.log("Titulos:");
//     titulos.map((titulo)=>{
//         console.log(titulo);
//     });
// }

// getCurrentLord();



// function getData(url) {
//     return fetch(url)
//         .then((response) => response.json())
//         .catch((e) => e);
// }

// async function getCurrentLord() {
//     try {
//         let house = prompt('introduce un numero. Ejemplo: 378');
//         if (!house) {
//             throw new Error('introduce un numero válido.');
//         }
//         const houseUrl = `https://anapioficeandfire.com/api/houses/${house}/`;

//         const houseData = await getData(houseUrl);
//         if (!houseData.url) {
//             throw new Error('Esa casa no existe o el servidor no responde');
//         }

//         if (!houseData.currentLord) {
//             throw new Error(`La casa ${houseData.name} no tiene señor actualmente.`);
//         }
//         const lordUrl = houseData.currentLord + '/';

//         //console.log(lordUrl);

//         const lordData = await getData(lordUrl);

//         //console.log(lordData);

//         const titulos = lordData.titles;

//         if (!titulos.length) {
//             throw new Error(`${lordData.name} no tiene titulos`);
//         }

//         console.log('Nombre: ', lordData.name);

//         console.log('Titulos:');
//         titulos.map((titulo) => {
//             console.log(titulo);
//         });
//     } catch (e) {
//         alert(e.message);
//         if (confirm('¿volver a probar?')) {
//             getCurrentLord();
//         }
//     } finally {
//         console.log('se acabo');
//     }
// }

// getCurrentLord();




//Ejercicio
//Hoy en *PONER CIUDAD AQUI* se esperan temperaturas máximas de *PONER GRADOS AQUI* y mínimas de *PONER GRADOS AQUI*
//https://www.el-tiempo.net/api


function getData(url) {
    return fetch(url)
        .then((response) => response.json())
        .catch((e) => e);
}


async function getCiudad() {
    try {
       const urlNacional="https://www.el-tiempo.net/api/json/v2/home";
       const infoNacional=await getData(urlNacional);
       const ciudades=infoNacional.ciudades;
       const miCiudad=ciudades.find((ciudad)=>ciudad.name==='Barcelona');
       const {max,min}=miCiudad.temperatures;

      

        console.log(`Hoy en  Barcelona se esperan temperaturas máximas de " ${max}," y mínimas de ${min}`)

        
    } catch (e) {
        alert(e.message);
        if (confirm('¿volver a probar?')) {
            getCiudad();
        }
    } finally {
        console.log('se acabo');
    }
}

getCiudad();



//metodo dificil
asyns function extra(){
    const urlNacional="https://www.el-tiempo.net/api/json/v2/home";
    const infoNacional=await getData(urlNacional);
    const {provincias}=infoNacional;
    const miProvincia=provincias.find(provincia)=>provincia.NONBRE_PROVINCIA==='A Coruña';
    const {CODPROV}=miProvincia;

    const urlMunicipiosProvincia=`https://www.el-tiempo.net/api/json/v2/provincias/${CODPROV}`;


    const {municipios}=await getData(urlMunicipiosProvincia);

    const miMunicipios=municipios.find(municipio=>municipio.NOMBRE.toLowerCase==="culleredo";

    console.log(miMunicpios);
}

    extra();









    
    





