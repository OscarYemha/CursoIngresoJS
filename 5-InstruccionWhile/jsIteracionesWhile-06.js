function mostrar(){
	let i = 0;
	let suma = 0;
	let numeroIngresado;

	while (i<5){
		numeroIngresado = prompt("Ingrese un número:");
		numeroIngresado = parseInt(numeroIngresado);
		suma += numeroIngresado;
		i++;		
	}

	document.getElementById("txtIdSuma").value = "El resultado de la suma es " + suma;
	document.getElementById("txtIdPromedio").value = "El promedio de los números sumados es " + (suma/i).toFixed(1);
}//FIN DE LA FUNCIÓN