Algoritmo Pregunta7
	Escribir "Ingrese el precio del producto"
	Leer precio
	Escribir  "Ingrese de membresia"
	Leer tipo
	descuento<-0
	
	Escribir "El tipo de membresia es: "
	Segun  tipo 
		'A':
			descuento<-0.1
			Escribir "                  A : Descuento de 10% "
			monto<-(1-descuento)*precio
			Escribir "Monto a pagar: " monto
		'B':
			descuento<-0.15
			Escribir "                  B : Descuento de 10% "
			monto<-(1-descuento)*precio
			Escribir "Monto a pagar: " monto
		'C':
			descuento<-0.2
			Escribir "                  C : Descuento de 10% "
			monto<-(1-descuento)*precio
			Escribir "Monto a pagar: " monto
	FinSegun
	
FinAlgoritmo
