Proceso Ejercicio_8
	
	cantidad_notas = 3
	Dimension notas(cantidad_notas)
	nota = 0
	suma = 0
	promedio = 0
	Para i <- 1 Hasta cantidad_notas con Paso 1 Hacer
		Escribir "Ingrese ", i,"º nota"
		Leer nota
		notas(i) = nota
	Fin Para
	
	Para j <- 1 Hasta cantidad_notas Con Paso 1 Hacer
		suma = suma + notas(j)
	Fin Para
	
	promedio = suma / cantidad_notas
	
	Si promedio >= 12.5 y promedio <= 20 Entonces
		Escribir "El estudiante aprobó"
		Escribir "Promedio: ",promedio
	SiNo
		Escribir "El estudiante ha desprobado"
		Escribir "Promedio: ",promedio
	Fin Si
	
	
FinProceso
