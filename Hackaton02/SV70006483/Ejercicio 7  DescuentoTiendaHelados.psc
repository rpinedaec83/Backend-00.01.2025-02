Proceso DescuentoTiendaHelados
    Definir tipo_membresia Como Caracter
    Definir precio_total, descuento, total_pagar Como Real
	
    // Pedir el precio total de la compra
    Escribir "Ingrese el precio total de la compra: "
    Leer precio_total
	
    // Pedir el tipo de membresía
    Escribir "Ingrese el tipo de membresía (A, B o C): "
    Leer tipo_membresia
	
    // Convertir a mayúscula para evitar errores
    tipo_membresia <- Mayusculas(tipo_membresia)
	
    // Inicializar el descuento
    descuento <- 0
	porcentaje <- 0
	
    // Determinar el descuento según el tipo de membresía
    Segun tipo_membresia Hacer
        "A":
            descuento <- precio_total * 0.10  // 10% de descuento
			porcentaje <- 10
			Escribir "Es un cliente con tipo de membresía: ", tipo_membresia
        "B":
            descuento <- precio_total * 0.15  // 15% de descuento
			porcentaje <- 15
			Escribir "Es un cliente con tipo de membresía: ", tipo_membresia
        "C":
            descuento <- precio_total * 0.20  // 20% de descuento
			porcentaje <- 20
			Escribir "Es un cliente con tipo de membresía: ", tipo_membresia
        De Otro Modo:
            Escribir "Tipo de membresía no válido. No se aplicará descuento."
    FinSegun
	
    // Calcular el total a pagar
    total_pagar <- precio_total - descuento
	
    // Mostrar resultados

    Escribir "Descuento aplicado ",porcentaje,"%: $", descuento
    Escribir "Total a pagar: $", total_pagar
FinProceso
