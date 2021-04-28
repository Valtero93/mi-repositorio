

window.onload = () => {
    h = 0; m = 0; s = 0; mls = 0; cuenta= 0;
    time = document.getElementById("time");
    btnIniciar = document.getElementById("btn-Iniciar");
    btnParar = document.getElementById("btn-Parar");
    btnReiniciar = document.getElementById("btn-Reiniciar");
    event();
 };
 function event(){
    btnIniciar.addEventListener("click", Iniciar); 
    btnParar.addEventListener("click", Parar);
    btnReiniciar.addEventListener("click", Reiniciar);   
 }
 function write(){
    let ht, mt, st, mlst;
    mls++;
    
    if (mls > 99){ s++ ; mls= 0; }
    if (s > 59){ m++; s= 0;}
    if (m > 59){ h++; m= 0;}
    if (h > 24) h= 0;
    
    mlst = ('0' + mls).slice(-2);
    st = ('0' + s).slice(-2);
    mt = ('0' + m).slice(-2);
    ht = ('0' + h).slice(-2);
 
    time.innerHTML = `${ht}:${mt}:${st}.${mlst}`;
 }
 function Iniciar(){
    write();
    cuenta = setInterval(write, 10);
    btnIniciar.removeEventListener("click", Iniciar);
 }
 function Parar(){
       clearInterval(cuenta);
       btnIniciar.addEventListener("click", Iniciar);
 }
 function Reiniciar(){   
       clearInterval(cuenta);
       time.innerHTML = "00:00:00.00"
       h= 0; m= 0 ; s= 0; mls= 0;
       btnIniciar.addEventListener("click", Iniciar);      
 }
 