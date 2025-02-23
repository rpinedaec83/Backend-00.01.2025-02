//18. Hacer un algoritmo en Pseint para una empresa se encarga de la venta y distribución de CD vírgenes.
//Los clientes pueden adquirir los artículos
//(supongamos un único producto de una única marca) por cantidad.
//Los precios son:

//    $10. Si se compran unidades separadas hasta 9.

//    $8. Si se compran entre 10 unidades hasta 99.

//    $7. Entre 100 y 499 unidades.

//    $6. Para mas de 500 unidades.

//    La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en Pseint que dado un número de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.

Proceso Ejercicio18
	Definir cantidad, precioUnidad, total, ganancia Como Real
    
	Escribir "Ingrese la cantidad de CDs a comprar:"
    Leer cantidad
    
    Si cantidad >= 500 Entonces
        precioUnidad = 6
    Sino Si cantidad >= 100 Entonces
			precioUnidad = 7
		Sino Si cantidad >= 10 Entonces
				precioUnidad = 8
			Sino
				precioUnidad = 10
			Fin Si
		FinSi
	FinSi
	total = cantidad * precioUnidad
	ganancia = total * 0.0825
	Escribir "Total a pagar: ", total
	Escribir "Ganancia del vendedor: ", ganancia
FinProceso