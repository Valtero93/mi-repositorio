"use strict";

// Arrays---listas ordenadas

// const miArray=[];
// const miOtroArray=Array();

// const arrayConCosas=["red","blue","green"];
// const otroArrayConCosas=Array("red","blue","green");

// const arrayConHuecos=Array(3);


// const miString="";
// console.log(!!miArray);
// console.log(!!miString);

// console.log(miArray.length);

// if(miArray){
//     console.log("tiene algo");
// }else{
//     console.log("esta vacio");
// }

// if(miArray.length){
//     console.log("tiene algo");
// }else{
//     console.log("esta vacio");
// }

// console.log(arrayConCosas[1]);

// arrayConCosas[1]="patatas";
// console.log(arrayConCosas[1]);


// console.log(arrayConCosas);

// const miVariable="algo";
// let copiaVariable=miVariable;
// console.log(miVariable,copiaVariable);

// copiaVariable=["otra cosa"];
// console.log(miVariable,copiaVariable);

// const miArrayACopiar=["algo"];
// let miCopiaDeArray=miArrayACopiar;
// const miCopiaBuena=[...miArrayACopiar];

// console.log(miArrayACopiar,miCopiaDeArray,miCopiaBuena);


// /* EJERCICIO */
// const miArrayFor=[1,3,9,14,17,22];
// for(let i=0;i<6;i++){
//     console.log(miArrayFor[i]);
// }

// console.log("/////////// For más 1 en cada uno");
// const miArray=[1,3,9,14,17,22];
// for(let x=0;x<6;x++){
//     console.log(miArray[x]+1);
// }



// console.log("/////////// lo de antes pero con while ");
// const miArrayWhile=[1,3,9,14,17,22];
// let j=0;
// while(j<miArrayWhile.length){   
//     console.log(miArrayWhile[j]);
//     j++;
// }

// console.log("/////////// lo de antes pero con while ");
// const miArrayWhile1=[1,3,9,14,17,22];
// let m=0;
// while(m<miArrayWhile1.length){   
//     console.log(miArrayWhile1[m]+1);
//     m++;
// }


console.log("/////////// Matrices ");
/ * Quiero hacer una funcion que admita de parametro un numero El numero va a representar el alto y ancho de un array bidimensional Quiero meter un simbolo en las diagonales del array y quiero sacar esto despues por la consola * /

let val=prompt("Introduzca un valor para dimensionar: ");
const matriz=[];
function dimensionMatriz(valor){ 
    
    for(let i=0;i<valor;i++){
        matriz.push([])
        for(let j=0;j<valor;j++){
            matriz[i].push("*");
        }

    }
    return matriz;
}
console.log(dimensionMatriz(val));

/* con array(3).fill("*")---ya nos lo rellenaria */



// functionmatriz2(size){
//     const matriz=[];

//     matriz.push([]);

//     for(let j=0;j<size;j++){
//         matriz[j].push("*");
//     }
//     return matriz;
// }
// console.log(matriz(3));


const miMatriz=myyMatriz(val);
function changeDiagonal(matriz){
    for(let i=0;i<matriz.length;i++){
        matriz[i][i]="😈";

    }
    return myyMatriz;
}
console.log(changeDiagonal(miMatriz));




function comboCorto(val){
    return changeDiagonal(matriz(val));
}
    console.log(combo(8));
    console.log(comboCorto(8));

    function matrizV2(val){

        const matrix=Array(val);
        const array=Array(val);
        array.fill("*");

        matrix.fill(array);
        return matrix;

    }

    function matrixV2Bien(val){
        const matrix=[];
        for(let i=0;i<val)
    }

    




