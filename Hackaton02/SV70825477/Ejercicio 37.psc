Proceso ejercicio37
	// 	37.Hacer un algoritmo en Pseint para conseguir el M.C.D de un número por medio del algoritmo de Euclides.
	
	Definir A,B,AUX Como Entero
	Repetir
		ESCRIBIR "	Ingrese el primer numero"
		leer A
	Hasta Que A>0
	Repetir
		ESCRIBIR "	Ingrese el segundo numero"
		leer B
	Hasta Que B>0 
	si B>A Entonces
		AUX=B
		B=A
		A=AUX
	FinSi
	ESCRIBIR "A=",A
	ESCRIBIR "B=",B
	residuo=A mod B
	mientras residuo>0 Hacer
		AUX=B
		B=residuo
		A=AUX	
		
		residuo=A mod B
	FinMientras
	
	ESCRIBIR"MCD= ",B
	
FinProceso
