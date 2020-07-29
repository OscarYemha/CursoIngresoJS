function mostrar()
{
	let hour = document.getElementById("txtIdHora").value;

	/*let hour = parseInt(document.getElementById("txtIdHora").value);
	if(hour>=7 && hour<=11){
		alert("Es de mañana")
	}*/
	switch(hour){
		case "7":
		case "8":
		case "9":
		case "10":
		case "11":
			alert("Es de mañana.")
			break;
	}


}