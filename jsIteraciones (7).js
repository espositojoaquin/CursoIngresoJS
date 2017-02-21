function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta=true;
	var numero;

	while(respuesta==true)
	{   
		contador++
		numero=prompt("ingrese un numero");
		numero=parseInt(numero);
		respuesta=confirm("Desea continuar?");

		acumulador=acumulador+numero;
	

	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN