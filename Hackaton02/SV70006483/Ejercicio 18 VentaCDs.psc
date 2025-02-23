Proceso VentaCDs
    Definir cantidad, precioUnitario, totalVenta, ganancia Como Real
	
    // Solicitar cantidad de CDs
    Escribir "Ingrese la cantidad de CDs a comprar:"
    Leer cantidad
	
    // Determinar precio por unidad según la cantidad
    Si cantidad <= 9 Entonces
        precioUnitario <- 10
    Sino Si cantidad >= 10 Y cantidad <= 99 Entonces
			precioUnitario <- 8
		Sino Si cantidad >= 100 Y cantidad <= 499 Entonces
				precioUnitario <- 7
			Sino // Para más de 500
				precioUnitario <- 6
			FinSi
		FinSi
	FinSi
			
			// Calcular el total de la venta
			totalVenta <- cantidad * precioUnitario
			
			// Calcular la ganancia del vendedor (8.25% de la venta)
			ganancia <- totalVenta * 0.0825
			
			// Mostrar resultados
			Escribir "Precio unitario: $", precioUnitario
			Escribir "Total a pagar: $", totalVenta
			Escribir "Ganancia del vendedor: $", ganancia
FinProceso
