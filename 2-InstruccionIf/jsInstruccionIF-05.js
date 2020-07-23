function mostrar()
{
	//tomo la edad  
	let age = parseInt(document.getElementById("txtIdEdad").value);

	if(!(age>=13 && age<=17)){
		alert("No es adolescente")
	}

}//FIN DE LA FUNCIÓN