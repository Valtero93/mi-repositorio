'use strict'



 let num=+prompt("Introduce la cantidad a convertir : ");
    
 let tip=prompt("Introduce '2' para binario o '10' para decimal : ");

while(tip !=2 && tip!=10){
    alert("NUmero de operación invalido,marque 2 o 10");
    tip=+prompt("Introduce '2' para binario o '10' para decimal : ");
}

if(tip==2){
    
    function conversor(numero,tipo){
    
        let resultado=numero.toString(tipo);

        return resultado;

        
    }

    alert("En binario es : "+conversor(num,tip));

}else{


    function binarioToDecimal(numeroBinario){
        let decimal=0;
        const contador=numeroBinario.length;

        for(let i=0;i<contador;i++){
            let posicion=contador - 1 - i;
            let base=2**i;
            decimal +=numeroBinario[posicion]*base;

        }
        return decimal;
        
    }
    console.log(num);

    alert("En decimal es : "+binarioToDecimal(num.toString()));
}
    