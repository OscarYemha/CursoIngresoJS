function mostrar()
{
	let age = parseInt(document.getElementById("txtIdEdad").value); //tomo la edad  
	
	if(age>=18){
		alert("Es mayor de edad");
	}else{
		alert("Es menor de edad")
	}
}//FIN DE LA FUNCIÓN