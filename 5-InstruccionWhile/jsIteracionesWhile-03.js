/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let clave = prompt("Ingrese la clave.");
	
	 while(clave!=="utn750"){
		clave = prompt("Ingrese la clave.");
	 }
	 alert("La clave es correcta")

	 /* Con do while

	 let clave;

	 do{
		clave=prompt("Ingrese la clave.");
	 }while(clave!=="utn750");
	 
	 */

}//FIN DE LA FUNCIÓN
