//7. Hacer un algoritmo en Pseint para una tienda de helado
//que da un descuento por compra a sus clientes con membresía
//dependiendo de su tipo, sólo existen tres tipos de membresía,
//tipo A, tipo B y tipo C. Los descuentos son los siguientes:
//   Tipo A 10% de descuento
//   Tipo B 15% de descuento
//   Tipo C 20% de descuento
Proceso Ejercicio7
	Escribir "Introduce el precio del helado: "
	Leer precioHelado
	Escribir "Introduce tu tipo de membresia: "
	Leer tipoMembresia
	descuento = 0
	Segun tipoMembresia Hacer
		"A":
			descuento = 0.1
		"B":
			descuento = 0.15
		"C":
			descuento = 0.2
		De Otro Modo:
			Escribir "Error, no existe ese tipo de membresia"
	Fin Segun
	total = precioHelado - (precioHelado * descuento)
	Escribir "El precio total es: ",total
FinProceso