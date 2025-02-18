Proceso  promedio_notas
		Definir nota1, nota2, nota3, promedio Como Real
		
		Escribir "Ingrese la primera nota: "
		Leer nota1
		Mientras nota1 < 11 O nota1 > 20 Hacer
			Escribir "Nota inválida. Ingrese una nota entre 11 y 20: "
			Leer nota1
		FinMientras
		
		Escribir "Ingrese la segunda nota: "
		Leer nota2
		Mientras nota2 < 11 O nota2 > 20 Hacer
			Escribir "Nota inválida. Ingrese una nota entre 11 y 20: "
			Leer nota2
		FinMientras
		
		Escribir "Ingrese la tercera nota: "
		Leer nota3
		Mientras nota3 < 11 O nota3 > 20 Hacer
			Escribir "Nota inválida. Ingrese una nota entre 11 y 20: "
			Leer nota3
		FinMientras
	
		promedio <- (nota1 + nota2 + nota3) / 3
		
		Escribir "El promedio es: ", promedio
		
		Si promedio >= 11 Entonces
			Escribir "El estudiante ha aprobado."
		Sino
			Escribir "El estudiante no ha aprobado."
		FinSi


FinProceso
