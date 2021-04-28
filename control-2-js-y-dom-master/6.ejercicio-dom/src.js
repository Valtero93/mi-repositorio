function wordCount() {

   parrafo = document.getElementById("parrafo1").value;
 
   
   numeroCaracteres = parrafo.length;
 
  
   inicioBlanco = /^ /
   
   finBlanco = / $/

   variosBlancos = /[ ]+/g 
 
   parrafo = parrafo.replace(inicioBlanco,"");
   parrafo = parrafo.replace(finBlanco,"");
   parrafo = parrafo.replace(variosBlancos," ");
 
   parrafoDividido = parrafo.split(" ");
   numeroPalabras = parrafoDividido.length;
 

   // tC = (numeroCaracteres==1)?" carácter":" caracteres";
   // tP = (numeroPalabras==1)?" palabra":" palabras";
      
   // alert (numeroCaracteres + tC +"\n" + numeroPalabras + tP);
  }