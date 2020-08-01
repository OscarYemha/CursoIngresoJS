/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar(){

	let suma = 0;
	let i = 0;
	let respuesta;

	do{
		respuesta = prompt("Ingrese un número:");
		respuesta = parseInt(respuesta);
		suma += respuesta;
		respuesta = prompt("¿Quiere agregar otro número? Responda Sí o No.");
		respuesta = respuesta.toLowerCase();
		i ++;
	}while(respuesta === "si");


	document.getElementById("txtIdSuma").value = "El resultado de la suma es " + suma;
	document.getElementById("txtIdPromedio").value = "El promedio de los números sumados es " + (suma/i).toFixed(1)
	
}