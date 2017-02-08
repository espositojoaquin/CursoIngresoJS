/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var preciouno;
	var preciodos;
	var preciotres;
	var resultado;

	preciouno=document.getElementById('PrecioUno').value;
	preciodos=document.getElementById('PrecioDos').value;
	preciotres=document.getElementById('PrecioTres').value;
	preciouno=parseInt(preciouno);
	preciodos=parseInt(preciodos);
	preciotres=parseInt(preciotres);
	resultado=parseInt(preciouno+preciodos+preciotres);
	alert("la suma es "+resultado);

	
}
function Promedio () 
{
	var perciouno;
	var preciodos;
	var preciotres;
	var total;
	var resultado;

	preciouno=document.getElementById('PrecioUno').value;
	preciodos=document.getElementById('PrecioDos').value;
	preciotres=document.getElementById('PrecioTres').value;

	
	preciouno=parseInt(preciouno);
	preciodos=parseInt(preciodos);
	preciotres=parseInt(preciotres);
	total=parseInt(preciouno+preciodos+preciotres);
	resultado=parseInt((total)/3);
	
	alert("el promedio es "+resultado);

	
}
function PrecioFinal () 
{
	var perciouno;
	var preciodos;
	var preciotres;
    var preciosiniva;
    var subresultado;
	var iva;
	var total;
	preciouno=document.getElementById('PrecioUno').value;
	preciodos=document.getElementById('PrecioDos').value;
	preciotres=document.getElementById('PrecioTres').value;
	preciouno=parseInt(preciouno);
	preciodos=parseInt(preciodos);
	preciotres=parseInt(preciotres);
	subresultado=parseInt(subresultado);
	iva=parseInt(iva);
	total=parseInt(total);
	
	subresultado=parseInt(preciouno+preciodos+preciotres);
	iva=parseInt((resultado*21)/100));
	total=parseInt(subresultado+iva)

	
	alert("el precio final es "+total);

	
}