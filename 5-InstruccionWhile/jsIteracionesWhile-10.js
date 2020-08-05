/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positivos-negativos). */
function mostrar(){

	let sumaNegativos = 0;
	let sumaPositivos = 0;
	let cantidadPositivos = 0;
	let cantidadNegativos = 0;
	let cantidadCeros = 0;
	let cantidadPares = 0;
	let promedioNegativos;
	let promedioPositivos;
	let num;
	let pregunta;

	do{
		num = parseInt(prompt("Ingrese un número:"));
		if(num<0){
			if(num%2===0){
				cantidadPares ++;
			}
			sumaNegativos += num;
			cantidadNegativos ++;
		
		}else{
			if(num===0){
				cantidadCeros ++;
				cantidadPares ++;
			}else{
				sumaPositivos += num;
				cantidadPositivos ++;
				if(num%2===0){
					cantidadPares ++;
				}
			}
		}	
		
		pregunta = prompt("¿Desea ingresar otro número? Responda Sí o No:");
		pregunta = pregunta.toLowerCase();
		
	}while(pregunta==="si");

	promedioPositivos = (sumaPositivos/cantidadPositivos).toFixed(1);
	promedioNegativos = (sumaNegativos/cantidadNegativos).toFixed(1);

	if(isNaN(promedioPositivos)){
		promedioPositivos = 0;
	}
	if(isNaN(promedioNegativos)){
		promedioNegativos = 0;
	}

	document.write("La suma de los valor/es negativos es igual a: " + sumaNegativos);
	document.write("La suma de los valor/es positivos es igual a: " + sumaPositivos);
	document.write("La cantidad de valor/es positivos es/son: " + cantidadPositivos);
	document.write("La cantidad de valor/es negativos es/son: " + cantidadNegativos);
	document.write("La cantidad de valor/es igual a 0 es/son: " + cantidadCeros);
	document.write("La cantidad de valor/es pares es/son: " + cantidadPares);
	document.write("El promedio de valores positivos es igual a: " + promedioPositivos);
	document.write("El promedio de valores negativos es igual a: " + promedioNegativos);
}