Algoritmo  Pregunta27
	
	break<-0
	sum<-0
	div<-1
	Mientras break = 0 Hacer
		Escribir "Ingresa un numero para procesarlo: "	
		leer num	
		
		si num<0 Entonces
			
			break = 1
			
		SiNo
			sum<-sum+num
			media<-sum/div
			
			div<-div+1
			
			Escribir "La media es: " media
		FinSi
		
	FinMientras

FinAlgoritmo

