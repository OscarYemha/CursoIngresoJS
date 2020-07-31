/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar(){
	
	let i = 0;
	let contador = 0;
	let respuesta = prompt("Quiere sumar números?");
	respuesta = respuesta.toLowerCase();

	while(respuesta==="si"){
		respuesta = prompt("Ingrese un número");
		respuesta = parseInt(respuesta);
		i+=respuesta;
		respuesta = prompt("Quiere agregar otro número?");
		respuesta = respuesta.toLowerCase();
		if(respuesta==="si"){
			contador ++;
		}
	}

	document.getElementById("txtIdSuma").value = i;

	if(contador===0){
		document.getElementById("txtIdPromedio").value=i;
	}else{
		document.getElementById("txtIdPromedio").value=i/2;
	}
	
	alert("Programa finalizado");
	
}//FIN DE LA FUNCIÓN