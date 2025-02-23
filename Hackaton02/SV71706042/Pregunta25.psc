Algoritmo  Pregunta25
	
	Escribir "Ingresa un numero para dividirlo: "
	leer dividendo
	Escribir "Ingresa el divisor: "
	leer divisor
	
	cociente<-0
	Mientras dividendo>=divisor Hacer
		
		cociente<-cociente+1
		dividendo<-dividendo-divisor
		residuo<-dividendo
	FinMientras
	
	Escribir "El cociente es: " cociente
	Escribir "El residuo es: " residuo
FinAlgoritmo

