Proceso Ejercicio_5
	
	Definir cantidad, subTotal, descuento, total Como Real
	Definir opcionValida Como Entero
	
	Escribir "Ingrese la cantidad de zapatos comprados"
	Leer cantidad
	
	subTotal = cantidad * 80
	descuento = 0
	total = 0
	
	Si cantidad > 10 y cantidad <= 20 Entonces
		descuento = subTotal * 0.10
		total = subTotal - descuento
	SiNo
		Si cantidad > 20 y cantidad < 30 Entonces
			descuento = subTotal * 0.20
			total = subTotal - descuento
		SiNo
			Si cantidad >= 30 Entonces
				descuento = subTotal * 0.40
				total = subTotal - descuento
			SiNo
				descuento = 0
				total = subTotal
			Fin Si
		Fin Si
	Fin Si
	
	Escribir "Cantidad de zapatos: ",cantidad
	Escribir "Descuento: ",descuento
	Escribir "SubTotal: ",subTotal
	Escribir "Total: ",total
FinProceso
