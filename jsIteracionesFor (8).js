function Mostrar()
{
	var numeroanterior;
	var numeroingresado;
	var tienedivisor="no";
	var numerorrecorrido;
	

	numeroingresado=prompt("ingrese un numero");
	numeroingresado=parseInt(numeroingresado);
	

	

for(numerorrecorrido=numeroingresado-1;numerorrecorrido>2;numerorrecorrido--)

	{
		tienedivisor="no";
	for(numeroanterior=2;numeroanterior<(numerorrecorrido/2);numeroanterior++)
		{
           if(numerorrecorrido%numeroanterior==0)
           {
           	tienedivisor="si";
           	break;
           }
		}


		if(tienedivisor=="no")
		{
			console.log("es primo"+numerorrecorrido);
		}
 
	}

/*for(numeroanterior=2;numeroanterior<(numeroingresado/2);numeroanterior++)

	if(numeroingresado%numeroanterior==0)
		{
		
			tienedivisor="si";
			break;
			


		}

	
	}
      
      if(tienedivisor=="no")
		{
			console.log("es primo"+numerorrecorrido);
		}
		else
		{
			console.log("no es primo");
		}*/
}//FIN DE LA FUNCIÓN
