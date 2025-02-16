Algoritmo  Pregunta24
	
	Escribir "Suma de los numeros pares hasta el 1000"
	num<-1000
	Mientras num>0 Hacer
		si (num mod 2) = 0 Entonces
			
			sum<-sum+num
			
		FinSi
		num<-num-1
	FinMientras
	
	Escribir "La suma es: " sum
	
FinAlgoritmo

