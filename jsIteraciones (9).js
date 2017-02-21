function Mostrar()
{
	var  numero;
	var contador=0;
	var acumulador=0
	var maximo;
	var minimo;
	// declarar variables
	
	var respuesta=true;

	while(respuesta!=true)
	{
		numero=prompt("ingrese un numero");
		numero=parseInt(numero);
		

		if(contador==0)
		{
			maximo=numero;
			minimo=numero;
		}
			else
			{
				if(numero>maximo)
				{
					maximo=numero;
				}
				if(numero<minimo)
				{
					minimo=numero;
				}
			}
	}   

		acumulador=acumulador+numero;
		contador++;

		respuesta=confirm("¿Desea continuar?");


	

	}
	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;
}
    

	//FIN DE LA FUNCIÓN