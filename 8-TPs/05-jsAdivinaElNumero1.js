/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/


function comenzar(){
 
  alert("Ingrese un número del 1 al 100:");
  
}

function verificar(){
  
  /*let intentos = 0;
  let numeroIngresado = parseInt(document.getElementById("txtIdNumero").value);
  
	if(numeroIngresado===numeroSecreto){
    intentos ++;
    alert("¡Usted ha ganado y en sólo " + intentos + " intento/s!");
  }else{
    if(numeroIngresado<numeroSecreto){
      alert("Estuvo a " + (numeroSecreto-numeroIngresado) + " unidades.");
    }else{
      alert("Se pasó por " + (numeroIngresado-numeroSecreto) + " unidades.");
    }
  }
  intentos ++;
  numeroSecreto = Math.ceil(Math.random()*100);
  document.getElementById("txtIdIntentos").value = intentos;*/

  let numeroSecreto; 
  let intentos = 0;
  let numeroIngresado; 

  do{

    numeroSecreto = Math.ceil(Math.random()*100);
    numeroIngresado = parseInt(document.getElementById("txtIdNumero").value);
    intentos++;

    if(numeroIngresado===numeroSecreto){
      alert("¡Usted ha ganado y en sólo " + intentos + " intento/s!");
    }
    if(numeroIngresado!==numeroSecreto && numeroIngresado<numeroSecreto){
      alert("Estuvo a " + (numeroSecreto-numeroIngresado) + " unidades.");
    }
    if(numeroIngresado!==numeroSecreto && numeroIngresado>numeroSecreto){
      alert("Se pasó por " + (numeroIngresado-numeroSecreto) + " unidades.");
    }
    
    document.getElementById("txtIdIntentos").value = intentos;
    break;
    
  }while(numeroSecreto!==numeroIngresado);

}