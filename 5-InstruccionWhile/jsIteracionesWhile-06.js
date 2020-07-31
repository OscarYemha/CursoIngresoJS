function mostrar() {
	let i = 0;
	let acumulador = 0;
	let numeroIngresado;

	while (i < 5) {
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);
		acumulador += numeroIngresado;
		i++;
	}

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador / 2
}//FIN DE LA FUNCIÓN