function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);

	
switch(mesDelAño)
{
	case"Febrero":
	{
		alert("Este mes tiene 28 Días");
	}
	break;
		case"Enero":
        case"Marzo":
        case"Mayo":
       	case"Julio":
        case"Agosto":
     	case"Octubre":
        case"Diciembre":
        {
        	alert("Este mes tiene 31 Días");
        }
        break;
        case"Abril":
        case"Junio":
        case"Septiembre":
        case"Noviembre":
        {
        	alert("Este mes tiene 30 Días");
        }
      


}

}//FIN DE LA FUNCIÓN