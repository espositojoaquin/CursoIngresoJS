/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var perciouno;
	var preciodos;
	var preciotres;
	var resultado;

	
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
	var resultado;

	
	preciouno=parseInt(preciouno);
	preciodos=parseInt(preciodos);
	preciotres=parseInt(preciotres);
	resultado=parseInt(preciouno%preciodos%preciotres);
	alert("la suma es "+resultado);

	
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
	preciouno=parseInt(preciouno);
	preciodos=parseInt(preciodos);
	preciotres=parseInt(preciotres);
	
	subresultado=parseInt(preciouno+preciodos+preciotres);
	iva=parseInt((resultado*21)/100);
	total=parseInt(subresultado+iva)

	
	alert("la suma es "+total);

	
}