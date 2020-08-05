/* Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar(){	// declarar variables
	let i=0;
	let num;
	let max;
	let min;
	let pregunta;
	//iniciar variables
	
	do{
		num = parseInt(prompt("Ingrese un número:"));
		if(i===0 || num>max){
			max = num;
		}

		if(i===0 || num<min){
			min = num;
			i = 1;
		}

		pregunta = prompt("¿Desea seguir ingresando números? Responda Sí o No.");
		pregunta = pregunta.toLowerCase();
	}while(pregunta==="si");

	document.getElementById("txtIdMaximo").value = max;
	document.getElementById("txtIdMinimo").value = min;
	
} //FIN DE LA FUNCIÓN

