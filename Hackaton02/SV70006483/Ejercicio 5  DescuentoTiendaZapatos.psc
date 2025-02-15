Proceso DescuentoTiendaZapatos
    Definir cantidad, precio_unitario, total, descuento, total_pagar Como Real
    
    precio_unitario <- 80  // Precio fijo por zapato
	porcentaje <- 0
    
    Escribir "Ingrese la cantidad de zapatos a comprar: "
    Leer cantidad
	
    // Calcular el total sin descuento
    total <- cantidad * precio_unitario
	
    // Determinar el descuento según la cantidad comprada, iniciando del descuento mayo
    Si cantidad > 30 Entonces
        descuento <- total * 0.40  // 40% de descuento
		porcentaje <- 40
    Sino Si cantidad > 20 Entonces
			descuento <- total * 0.20  // 20% de descuento
			porcentaje <- 20
		Sino Si cantidad > 10 Entonces
				descuento <- total * 0.10  // 10% de descuento
				porcentaje <- 10
			Sino
				descuento <- 0  // Sin descuento
			FinSi
		FinSi
	FinSi
			

	// Calcular el total con descuento aplicado
	total_pagar <- total - descuento
	
	Escribir "Total sin descuento: $", total
	Escribir "Descuento aplicado ",porcentaje,"%: $", descuento
	Escribir "Total a pagar: $", total_pagar
	
FinProceso
