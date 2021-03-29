"use strict"

////FECHAS

const ahora=new Date();
console.log(ahora);
let birthday=new Date("April 4,1994 00:55:00");
birthday=new Date("19994-04-04,00:55:00");
birthday=new Date(1994,3,4);
birtgday=new Date(1994,3,4,0,55,0);
console.log(birthday);

const meses=["enero","febrero","marzo","abril","mayo","junio"];
const dias=["domingo","lunes","martes"];

console.log(meses[4]);
console.log(dias[1]);

console.log(birthday.getDay());
console.log(birthday.getMonth());
console.log(birthday.getFullYear());
console.log(birthday.Date());


birthday.setFullYear(2000);
console.log(birthday);

const age=(ahora-birthday)/1000;

console.log(years,days);