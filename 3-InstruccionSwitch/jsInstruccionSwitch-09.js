function mostrar()
{
	let season = document.getElementById("txtIdEstacion").value;
	let destiny = document.getElementById("txtIdDestino").value;
	const cost = 15000;

	switch(season){

		case "Invierno":
			if(destiny==="Bariloche"){
				alert("El costo total es $" + (cost+cost*0.2));	
			}else if(destiny==="Mar del plata"){
				alert("El costo total es $ " + (cost-cost*0.2));
			}else{
				alert("El costo total es $ " + (cost-cost*0.1));
			}
			break;

		case "Verano":
			if(destiny==="Bariloche"){
				alert("El costo total es $ " + (cost-cost*0.2));
			}else if(destiny==="Mar del plata"){
				alert("El costo total es $ " + (cost+cost*0.2));
			}else{
				alert("El costo total es $ " + (cost+cost*0.1));
			}
			break;
		
		default:
			if(destiny==="Cordoba"){
				alert("El costo total es $ " + cost);
			}else{
				alert("El costo total es $ " + (cost+cost*0.1));
			}
			break;
	}
	
}//FIN DE LA FUNCIÓN