function Mostrar()
{

	var contador=0;
	var positivo=0;          //>=13&&edad<18
	var negativo=1;
	var numero;
	
	var respuesta=true;

	while(respuesta==true)
	{ 	
		
		numero=prompt("ingrese un numero");
	    
		respuesta=confirm("Desea continuar?");
		numero=parseInt(numero);

		positivo=parseInt(positivo);

		negativo=parseInt(negativo);
		
		
		if(numero>-1)
		{
			positivo=positivo+numero;
		}
		else
		{
			negativo=negativo*numero;
		}

	
	


	    
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN