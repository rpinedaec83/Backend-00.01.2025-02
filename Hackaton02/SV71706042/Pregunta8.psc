Algoritmo Pregunta8
	Escribir "Ingrese las notas del alumno"
	Leer num1,num2,num3
	notaFinal<-REDON((num1+num2+num3)/3)
	Escribir "**La nota para aprobar es mayor a 11**"
	Escribir " "
	Escribir "La nota obtenida es: " notaFinal
	si notaFinal>=11 Entonces
		Escribir "APROBADO"
	SiNo
		Escribir "DESAPROBADO"
	FinSi
	
FinAlgoritmo
