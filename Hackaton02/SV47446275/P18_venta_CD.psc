Proceso venta_CD
		Definir cantidad, precio_unitario, precio_total, ganancia Como Real
		
		Escribir "Ingrese la cantidad de CDs a vender: "
		Leer cantidad
		
		// Cantidad_CDs
		Si cantidad >= 1 Y cantidad <= 9 Entonces
			precio_unitario <- 10
		Sino
			Si cantidad >= 10 Y cantidad <= 99 Entonces
				precio_unitario <- 8
			Sino
				Si cantidad >= 100 Y cantidad <= 499 Entonces
					precio_unitario <- 7
				Sino
					Si cantidad >= 500 Entonces
						precio_unitario <- 6
					FinSi
				FinSi
			FinSi
		FinSi
		
		// Precio_total
		precio_total <- cantidad * precio_unitario
		
		// Vendedor 8.25% de la venta
		ganancia <- precio_total * 0.0825
		
		// Resultado
		Escribir "El precio total para el cliente es: $", precio_total
		Escribir "La ganancia para el vendedor es: $", ganancia

FinProceso
