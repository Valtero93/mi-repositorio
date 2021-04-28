'use strict'

// const s
// const fecha=new Date(s,min,h,d);


// alert("La hora es : "+actual);



//let fecha = new Date();
// let options = { year: 'numeric', month: 'long', day: 'numeric' };

// console.log(
//   fecha.toLocaleDateString("es-ES", options)
// );


// const d = new Date();
// let hora=d.getHours;
// alert(hora);

// console.log('Segundos: '+d.getSeconds+' Minutos: '+d.getMinutes+' Hora: '+d.getHours+' Dia: '+d.getDay);      

////FECHAS
// var myVar;

// function myFunction() {
//   myVar = setInterval(alertFunc, 3000);
// }

// function alertFunc() {
//   alert("Hello!");
// }

let tiempo;
let segundos;
let minutos;
let horas;
let dias=0;


// var n = 0;
// var l;
// setInterval(function(){
//   l = n;
//   n++;
// },1000);


function contador(){
    for(horas=0;horas<=24;horas++){
        if(horas==24){
            dias++;
        }
        for(minutos=0;minutos<=60;minutos++){
            if(minutos==60){
                horas++;
            }
            for(segundos=0;segundos<=60;segundos++){
                if(segundos==60){
                    minutos++;
                    console.log('Segundos:'+segundos+' Minutos:'+minutos+' Horas:'+horas+' Dias:'+dias)
                }
                
                

                //setInterval()
                // var n = 0;
                // var l = document.getElementById("number");
                // window.setInterval(function(){
                // l.innerHTML = n;
                // n++;
                // },1000);
            }
        }
    }
}
setInterval(contador(),1000);

// function callback() {
//     console.log('se acabo el tiempo');
// }

// console.log('empieza a contar');
// setInterval(callback, 5000);




// // asignar el valor de las unidades en milisegundos
// var msecPerMinute = 1000 * 60;
// var msecPerHour = msecPerMinute * 60;
// var msecPerDay = msecPerHour * 24;
 
// // asignar la fecha en milisegundos
// var date = new Date();
// var dateMsec = date.getTime();
 
// // asignar la fecha el 1 de enero del a la media noche
// date.setMonth(0);
// date.setDate(1);
// date.setHours(0, 0, 0, 0);
 
// // Obtener la diferencia en milisegundos
// var interval = dateMsec - date.getTime();
 
// // Calcular cuentos días contiene el intervalo. Substraer cuantos días
// //tiene el intervalo para determinar el sobrante
// var days = Math.floor(interval / msecPerDay );
// interval = interval - (days * msecPerDay );
 
// // Calcular las horas , minutos y segundos
// var hours = Math.floor(interval / msecPerHour );
// interval = interval - (hours * msecPerHour );
 
// var minutes = Math.floor(interval / msecPerMinute );
// interval = interval - (minutes * msecPerMinute );
 
// var seconds = Math.floor(interval / 1000 );
 
// // Mostrar el resultado.
// document.write(days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds");