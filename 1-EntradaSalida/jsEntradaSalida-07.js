/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	let num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	alert("El resultado de la suma es " + (num1 + num2));	
}

function restar()
{
	let num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	let num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	alert("El resultado de la resta es " + (num1 - num2));
}

function multiplicar()
{ 
	let num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	let num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	alert("El resultado del producto es " + (num1 * num2));
}

function dividir()
{
	let num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	let num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	alert("El resultado del cociente es " + (num1/num2));
}

