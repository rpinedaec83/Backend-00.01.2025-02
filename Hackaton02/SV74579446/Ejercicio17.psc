//Ejercicio17
//Hacer un algoritmo en Pseint donde se ingrese una hora y nos calcule la hora dentro de un segundo.
Proceso hora_mas1s
	Definir  horas, min, seg Como Entero;
	
	Escribir  "Ingrese las horas (0-24)";
	leer horas;
	
	Escribir "Ingrese los minutos (0-59)"
	leer min;
	
	Escribir  "Ingrese los segundos (0-59)"
	leer seg;
	
	seg= seg+1;
	
	si seg=60 Entonces
		seg=0;
		min = min+1
	FinSi
	
	si min=60 Entonces
		
		min =0;
		horas = horas+1;
		
	FinSi
	
	
	si horas =24 Entonces
		
		horas=0
	FinSi
	
	
	Escribir "La hora dentro  de un segundo será: Horas: ",horas, " : ",min," : ",seg

FinProceso
