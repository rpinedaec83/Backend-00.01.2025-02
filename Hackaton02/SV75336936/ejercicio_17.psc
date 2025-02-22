Proceso ejercicio_17
	Definir  horas, minutos, segundos Como Entero;
	
	Escribir  "Ingrese las horas (0-24)";
	leer horas;
	
	Escribir "Ingrese los minutos (0-59)"
	leer minutos;
	
	Escribir  "Ingrese los segundos (0-59)"
	leer segundos;
	
	segundos= segundos+1;
	
	si segundos=60 Entonces
		segundos=0;
		minutos = minutos+1
	FinSi
	
	si minutos=60 Entonces
		
		minutos =0;
		horas = horas+1;
		
	FinSi
	
	
	si horas =24 Entonces
		
		horas=0
	FinSi
	
	
	Escribir "La hora dentro  de un segundo será: Horas: ",horas, " minutos: ",minutos,"  segundos: ",segundos
FinProceso
