/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let salary = parseInt(document.getElementById("txtIdSueldo").value);
	document.getElementById("txtIdResultado").value = salary + (salary*0.1);
}
