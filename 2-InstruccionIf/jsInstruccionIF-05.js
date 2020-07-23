function mostrar()
{
	//tomo la edad  
	let age = parseInt(document.getElementById("txtIdEdad").value);

	if(!(age>=13 && age<=17)){
		alert("No es adolescente")
	}
	//if((age<13 || age>17)) también funciona según ejemplo de la clase
}//FIN DE LA FUNCIÓN