/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/

function sumar()
{
	let num1 = document.getElementById("txtIdNumeroUno").value;
	let num2 = document.getElementById("txtIdNumeroDos").value;
	//let num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	//let num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	num1 = parseInt(num1);
	num2 = parseInt(num2);
	//alert("El resultado es " + (num1 + num2));
	alert(num1 + num2);
}

