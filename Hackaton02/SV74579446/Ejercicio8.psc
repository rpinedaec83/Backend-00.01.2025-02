//Ejercicio 8
// Hacer un algoritmo en Pseint para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.
Proceso Promedio_notas
	Definir nota1,nota2, nota3, promedio como real
	
	Escribir "Ingrese las 3 notas :"
	Leer nota1
	Leer nota2
	Leer nota3
	
	promedio=(nota1+nota2+nota3)/3
	
	si promedio>10.5 Entonces
		Escribir "El estudiante aprobó con: ", promedio
		
	SiNo
		Escribir "El estudiante desaprobo con: ", promedio
	FinSi

FinProceso