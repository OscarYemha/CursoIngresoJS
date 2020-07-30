function mostrar()
{
	let destiny = document.getElementById("txtIdDestino").value;

	switch(destiny){

		case "Cataratas":
		case "Mar del plata":
			alert("Hace calor.");
			break;

		case "Bariloche":
		case "Ushuaia":
			alert("Hace frío");
			break;

		default:
			alert("Caso no contemplado");
			break;

	}

}//FIN DE LA FUNCIÓN