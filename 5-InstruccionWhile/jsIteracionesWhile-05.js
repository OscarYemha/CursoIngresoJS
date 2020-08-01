/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;
	do{
		sexo = prompt("ingrese su sexo: f ó m");
		sexo = sexo.toLowerCase();
	}while(sexo!=="f" && sexo!=="m");

	document.getElementById("txtIdSexo").value = "Usted ingresó: " + sexo;

}//FIN DE LA FUNCIÓN