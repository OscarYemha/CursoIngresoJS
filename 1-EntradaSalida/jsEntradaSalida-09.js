/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let salary = parseInt(document.getElementById("txtIdSueldo").value);
	document.getElementById("txtIdResultado").value = parseInt(salary + ((salary*10)/100));
}
