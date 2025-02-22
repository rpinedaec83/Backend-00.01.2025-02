Proceso ejercicio36
	// 	Hacer un algoritmo en Pseint para calcular la serie de Fibonacci
	
	definir cantidad,i Como Entero
	definir a,b,auxiliar Como Entero
	Repetir
		escribir"Ingrese el numero"
		leer cantidad
	Hasta Que cantidad >= 1 y cantidad <=46
	a=1
	b=1
	i=1
	Mientras i <=cantidad Hacer
		
		
		Segun i Hacer
			1:
				escribir"termino ",i,": ",a
			2:
				escribir"termino ",i,": ",b
			De Otro Modo:
				auxiliar=b
				b=b+a
				a=auxiliar
				escribir "termino ",i,": ",b 
		Fin Segun
		
		
		i=i+1
	FinMientras
	
	
	
FinProceso
