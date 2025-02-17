Algoritmo  Pregunta9
	
	Escribir "Ingrese el monto a recibir"
	leer monto
	
	si monto<=2000 Entonces
		monto<-monto*(1+0.05)
		Escribir "EL monto final pagado es: " monto " obtuvo un aumento de 10%"
	SiNo
		monto<-monto*(1+0.1)
		Escribir "EL monto final pagado es: " monto " obtuvo un aumento de 5%"
	FinSi
	
	
FinAlgoritmo

