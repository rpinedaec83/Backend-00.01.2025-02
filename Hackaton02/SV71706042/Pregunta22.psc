Algoritmo  Pregunta23
	
	Escribir "Ingrese un numero"
	leer num
	
	Mientras num>0 Hacer
		si (num mod 2) = 1 Entonces
			
			sum<-sum+num
			
		FinSi
		num<-num-1
	FinMientras
	
	Escribir "La suma es: " sum
	
FinAlgoritmo

