//8. Hacer un algoritmo en Pseint para calcular el promedio de tres notas
//y determinar si el estudiante aprobó o no.

Proceso Ejercicio8
	Definir primeraNota,segundaNota,terceraNota,promedio Como Real
	Escribir "Introduce la primera nota: "
	Leer primeraNota
	Escribir "Introduce la segunda nota: "
	Leer segundaNota
	Escribir "Introduce la tercera nota: "
	Leer terceraNota
	promedio = (primeraNota+segundaNota+terceraNota)/3
	
	Si promedio >= 13.5 Entonces
		Escribir "Aprobaste con un promedio de: ",promedio
	SiNo
		Escribir "Desaprobaste con un promedio de: ",promedio
	Fin Si
FinProceso