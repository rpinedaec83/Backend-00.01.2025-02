Proceso Ejercicio8
	// 	8Hacer un algoritmo en Pseint para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.
	
	escribir "Valor de nota 1";
	leer nota1
	escribir "Valor de nota 2";
	leer nota2
	escribir "valor de nota 3";
	leer nota3
	
	
	resultado = nota1 + nota2 + nota3;
	resultado2 =resultado/3;
	si resultado2 <= 20 & resultado2 > 10;
		escribir "Aprobado ", resultado2, " de promedio ";
	SiNo
		si resultado2 < 10;
			escribir "Desaprobado ", resutado2, " de promedio";
		SiNo
			si resultado2 >20;
				escribir "Error dato no valido"
				
			FinSi
		FinSi
	FinSi
	
	
	

	
	
	
	
	
FinProceso
