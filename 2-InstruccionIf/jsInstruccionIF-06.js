function mostrar()
{
	//tomo la edad  
	let age = parseInt(document.getElementById("txtIdEdad").value);

	if(age<13){
		alert("Es niño");
	}else if(age>=13 && age<=17){
		alert("Es adolescente");
	}else{
		alert("Es mayor");
	}



}//FIN DE LA FUNCIÓN