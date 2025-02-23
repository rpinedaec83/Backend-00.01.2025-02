//Ejercicio18
//Hacer un algoritmo en Pseint para una empresa se encarga de la venta y distribución de CD vírgenes. Los clientes pueden adquirir los artículos
//(supongamos un único producto de una única marca) por cantidad. Los precios son:
//	$10. Si se compran unidades separadas hasta 9.
//  $8. Si se compran entre 10 unidades hasta 99.
//  $7. Entre 100 y 499 unidades.
//	$6. Para mas de 500 unidades.
//La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en Pseint que dado un número de CDs a vender calcule el precio total 
//para el cliente y la ganancia para el vendedor.

Proceso Ventas_cd
	Definir cantidad Como Entero
    Definir precioUnitario, totalVenta, ganancia Como Real
	
    Escribir "Ingrese la cantidad de CDs a comprar:"
    Leer cantidad
	
    Si cantidad <= 9 Entonces
        precioUnitario <- 10
    Sino Si cantidad >= 10 Y cantidad <= 99 Entonces
			precioUnitario <- 8
		Sino Si cantidad >= 100 Y cantidad <= 499 Entonces
				precioUnitario <- 7
			Sino
				precioUnitario <- 6
			FinSi
			
		FinSi
	FinSi
	
	totalVenta <- cantidad * precioUnitario
	
	ganancia <- totalVenta * 0.0825
	
	Escribir "El precio unitario es: ", precioUnitario
	Escribir "El total a pagar por el cliente es: ", totalVenta
	Escribir "La ganancia del vendedor es: ", ganancia
	
FinProceso
