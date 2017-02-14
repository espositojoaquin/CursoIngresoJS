function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numerorandom;
	numerorandom=Math.floor(Math.random() * 10)+1;
    
    if(numerorandom>8&&numerorandom<11)
    {
    	alert("Exelente");
    }
    else
    {


    if(numerorandom>3&&numerorandom<9)
    {
    	alert("Aprobó");
    }
    else
    	{
    		alert("Vamos la proxima se puede");

    	}

    }
}//FIN DE LA FUNCIÓN