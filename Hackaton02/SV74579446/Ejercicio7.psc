// Ejercicio 7:
//Hacer un algoritmo en Pseint para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo de su tipo, 
//sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
//Tipo A 10% de descuento
//Tipo B 15% de descuento
//Tipo C 20% de descuento

Proceso Heladeria_descuento
	Definir precio,precio_final, descuento Como Real
	Definir membresia Como Caracter
	
	Escribir "Ingrese el precio del helado"
	Leer precio
	
	Repetir
		Escribir "Escoja el tipo de menbresia (A, B, C)"
		Leer membresia
		membresia= Mayusculas(membresia)
	Hasta Que (membresia="A" o membresia="B" o membresia="C")
	 
	Segun membresia Hacer
		"A":
			descuento=0.1
		"B":
			descuento=0.15
		"C":
			descuento=0.2
			
	FinSegun
	
	precio_final=precio*descuento 
	
	Escribir "El precio final aplicando el ", descuento*100, " % Descuento: ", precio_final
	
FinProceso