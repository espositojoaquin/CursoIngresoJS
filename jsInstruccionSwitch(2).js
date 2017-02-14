function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;


switch(mesDelAño)
{

case"Enero":
case"Febrero":
case"Aarzo":
case"Abril":
case"Mayo":
case"Junio":
alert("falta para el invierno");
 break;
case"Julio":
case"Agosto":
alert("Abrigate que hace frio");
break;
case"Septiembre":
case"Octubre":
case"Noviembre":
case"Diciembre":
alert("ya pasamos el frio ahora hace calor");


}



}//FIN DE LA FUNCIÓN