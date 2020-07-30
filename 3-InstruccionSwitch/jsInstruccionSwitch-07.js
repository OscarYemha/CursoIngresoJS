function mostrar()
{
	let destiny = document.getElementById("txtIdDestino").value;

	switch(destiny){

		case "Cataratas":
			alert("Eso es en el norte");
			break;

		case "Mar del plata":
			alert("Eso es en el este");
			break;

		case "Bariloche":
			alert("Eso es en el oeste");
			break;

		case "Ushuaia":
			alert("Eso es en el sur");
			break;

		//default:
			//alert("Esta provincia no está contemplada");
			//break;
	}
	
}//FIN DE LA FUNCIÓN