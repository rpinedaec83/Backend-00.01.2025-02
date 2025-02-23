Algoritmo pregunta18
    
	
    Escribir "Ingrese la cantidad de CDs a comprar:"
    Leer cantidad
	
    // Determinar el precio por unidad según la cantidad
    Si cantidad >= 1 Y cantidad <= 9 Entonces
        precioUnidad <- 10
    Sino
		Si cantidad >= 10 Y cantidad <= 99 Entonces
		precioUnidad <- 8
		Sino 
			Si cantidad >= 100 Y cantidad <= 499 Entonces
				precioUnidad <- 7
			Sino 
				Si cantidad >= 500 Entonces
					precioUnidad <- 6
				FinSi
			FinSi	
		FinSi
	FinSi

// Calcular el precio total
	precioTotal <- cantidad * precioUnidad

// Calcular la ganancia del vendedor (8.25% de la venta)
	ganancia <- precioTotal * 0.0825

// Mostrar resultados
	Escribir "El precio total para el cliente es: $", precioTotal
	Escribir "La ganancia del vendedor es: $", ganancia
FinAlgoritmo







