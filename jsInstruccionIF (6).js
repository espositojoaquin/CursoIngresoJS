function Mostrar()
{
//tomo la edad  

var edad;
edad=document.getElementById('edad').value;

if(edad>=13&&edad<18)
{
	alert("Usted es un adolescente");
	

}

if(edad<13)
{
	alert("Usted es un niño");
}
else
{ 
alert("usted es mayor de edad");
}

}//FIN DE LA FUNCIÓN