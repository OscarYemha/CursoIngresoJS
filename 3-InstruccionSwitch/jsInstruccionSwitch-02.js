function mostrar()
{
	//tomo el mes
	let month = document.getElementById("txtIdMes").value;

	switch(month){

		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frío!")
			break;
		
		case "Noviembre":
		case "Diciembre":
		case "Enero":
		case "Febrero":

			alert("Ya pasamos el frío, ahora calor!");
			break;

		default :
			alert("Falta para el invierno");
			break;
	}

}//FIN DE LA FUNCIÓN