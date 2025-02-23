//Ejercicio 9
//Hacer un algoritmo en Pseint para determinar el aumento de un trabajador, se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, 
//si generaba menos de $2000 su aumento será de un 10%.

Proceso Aumento_sueldo
	Definir sueldo, aumento, sueldoTotal Como Real
	Escribir "Ingrese su sueldo:"
	Leer sueldo
	
	si sueldo>2000 Entonces
		aumento=sueldo*0.05
		sueldoTotal=sueldo+aumento
	SiNo
		aumento=sueldo*0.1
		sueldoTotal=sueldo+aumento
	FinSi
	Escribir "Sueldo es de: ", sueldo
	Escribir "El aumento sera de: ", aumento
	Escribir "El total que recibirá es: ", sueldoTotal
FinProceso