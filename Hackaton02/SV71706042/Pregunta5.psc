Algoritmo Pregunta5
	Escribir  "Ingrese la cantidad de zapatos"
	Leer cantidadZapatos
	precio<-80
	descuento<-0
	si cantidadZapatos >= 10 y cantidadZapatos<20 Entonces
		descuento<-0.1
	SiNo
		si cantidadZapatos >= 20 y cantidadZapatos<30 Entonces
			descuento<-0.2
		SiNo
			si cantidadZapatos >= 30 Entonces
				descuento<-0.4
			FinSi
		FinSi
	FinSi
	monto<-precio*(1-descuento)*cantidadZapatos
	Escribir "El monto a pagar es: " monto
	
FinAlgoritmo
