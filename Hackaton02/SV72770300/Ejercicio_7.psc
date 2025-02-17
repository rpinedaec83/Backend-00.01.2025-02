Proceso Ejercicio_7
	
	Escribir "Ingrese el monto de consumo de helados del cliente (S/.)"
	Leer compraCliente
	Escribir "Membresía del cliente"
	Escribir "Digite 1 del cliente A, 2 del cliente B y 3 del cliente C"
	Leer opcionCliente
	
	descuento = 0
	totalPagar = 0
	validacion = falso
	
	Segun opcionCliente Hacer
		1:
			descuento = compraCliente * 0.10
			totalPagar = compraCliente - descuento
			validacion = Verdadero
		2:
			descuento = compraCliente * 0.15
			totalPagar = compraCliente - descuento
			validacion = Verdadero
		3:
			descuento = compraCliente * 0.20
			totalPagar = compraCliente - descuento
			validacion = Verdadero
		De Otro Modo:
			Escribir "Este tipo de cliente no existe"
			validacion = falso
	Fin Segun
	
	Si validacion = Verdadero Entonces
		Escribir "Consumo del cliente: S/. ",compraCliente
		Escribir "Descuento: S/. ",descuento
		Escribir "Total: S/. ",totalPagar
	SiNo
		Escribir "Por favor, volver a digitar el tipo de cliente"
	Fin Si
	
	
FinProceso
