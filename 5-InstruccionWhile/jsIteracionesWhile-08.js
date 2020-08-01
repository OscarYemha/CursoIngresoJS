/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let positivos = 0;
	let negativos = 1;
	let respuesta;

	do{
		respuesta = prompt("Ingrese un número (puede ser tanto positivo como negativo):");
		respuesta = parseInt(respuesta);
		if(respuesta<0){
			negativos*=respuesta;
		}else{
			positivos+=respuesta;
		}
		respuesta = prompt("¿Quiere ingresar otro número? Responda Sí o No.");
		respuesta = respuesta.toLowerCase();
	}while(respuesta === "si");

	document.getElementById("txtIdSuma").value = positivos;
	document.getElementById("txtIdProducto").value = negativos;

}//FIN DE LA FUNCIÓN