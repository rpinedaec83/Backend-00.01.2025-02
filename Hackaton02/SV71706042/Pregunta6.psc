Algoritmo Pregunta6
	Escribir  "Ingrese la cantidad de horas trabajadas"
	Leer cantHoras
	
	horasLimite<-40
	
	pago<-cantHoras*20
	
	si cantHoras > horasLimite Entonces
		pago<-(cantHoras-horasLimite)*25 + horasLimite*20
	FinSi
	
	
	Escribir "El monto a pagar es: " pago
	
FinAlgoritmo
