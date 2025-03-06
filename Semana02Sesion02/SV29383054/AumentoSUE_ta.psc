Proceso AumentoSUE
	Definir sueldo, aumento Como Real
	
	Escribir "Ingrese el sueldo"
	Leer sueldo
	si sueldo<2000 Entonces
		aumento=sueldo*0.1
		Escribir "El 10% es;",aumento
		sueldo=sueldo+aumento
		Escribir "El sueldo actualizado es : $", sueldo
	sino
		aumento=sueldo*0.05
		escribir "El 5% es:",aumento
		sueldo=sueldo+aumento
		escribir "el sueldo actualizado es : $", sueldo
		
	FinSi
	
	FinProceso

