function mostrar()
{
	//tomo el mes
	let month = document.getElementById("txtIdMes").value;
	
	switch(month){

		case "Febrero":
			alert("Este mes no tiene más de 29 días");
			break;

		default :
			alert("Este mes tiene 30 días o más");
			break;//Es indiferente ponerlo porque está al final pero es recomendable ponerlo
	}


}//FIN DE LA FUNCIÓN