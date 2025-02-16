Proceso Ejercicio6
	// ?	6Hacer un algoritmo en Pseint para ayudar a un trabajador a saber cuál será su sueldo semanal, se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.
	
	definir horasw Como Entero;
	escribir "Horas trabajas";
	leer horasw;
	
	si horasw <= 40 & horasw > 0;
		pagodia = 20;
	SiNo
		si horasw > 40;
			pagodia = 25;
		SiNo
			escribir "Sin remuneración"
			
		FinSi
		
	FinSi
	
	escribir "Salario semanal es: $",pagodia * horasw;
	
	
	
	
FinProceso
