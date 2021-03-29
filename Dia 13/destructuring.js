"use strict"

////DESTRUCTURING

const userData=["Perico","Palotes"];

const [nombre,apellido]=userData;

console.log(nombre);
console.log(apellido);

const userdata2=["Perico2","de los ", " palotes"];


const [nombre2, ,apellido2]=userdata2;
console.log(nombre2);
console.log(apellido2);

const nombres=["zoe","gabriel","oliver","iraisy","rodrigo","diego"];



////rest
let [nombres1,nombres2,nombres3,...losDemas]=nombres;
nombres1="pedro";
losDemas[0]="pedro";
console.log(nombres1,nombres2,nombres3);
console.log(losDemas);
console.log(nombres);

const userAMedias=["zoe" /* "garcia" */];

const [nombreUser,apellidoUser="sin apellido"]=userAMedias;

console.log(nombreUser,apellidoUser);

function test([primero,segundo,...loDemas]){
    console.log(primero);
    console.log(segundo);
    console.log(ploDemas);
}

test(nonbres);



////Objetos

const objeto={
    clave1: "valor 1",
    clave2: "valor 2",
    clave3: "valor 3",
    clave4: "valor 4",
    clave5: "valor 5",
    clave6: "valor 6",
    clave7: "valor 7",
    clave8: "valor 8",
};

const {clave1,clave4,clave7}=objeto;
console.log(clave1,clave4,clave7);
console.log(objeto.clave1,objeto,clave4,objeto.clave7);

////rest
const{clave2,clave6,...losDemas}=objeto;

console.log(clave2,clave6);
console.log(losDemas);


////valor por defecto
const { clave3 = 'vacio', clave9 = 'vacio' } = objeto;
console.log(clave3, clave9);

const testUser = {
    name: 'Pablo',
    lastName: 'garcia',
    age: 10,
    pet: 'perro',
};

function test2({ name, age }) {
    console.log(`${name} tiene ${age} años`);
}

//sin destructuring:
/* function test2(user) {
    console.log(`${user.name} tiene ${user.age} años`);
} */

test2(testUser);

