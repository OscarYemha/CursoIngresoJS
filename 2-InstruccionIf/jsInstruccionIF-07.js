function mostrar()
{

	let age = parseInt(document.getElementById("txtIdEdad").value);
	let status = document.getElementById("estadoCivil").value;
	 
	if(age<18 && status!=="Soltero"){
		alert("Es muy pequeño para NO ser soltero.")
	}
	
}//FIN DE LA FUNCIÓN