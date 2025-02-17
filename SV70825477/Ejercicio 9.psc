Proceso ejercicio9
	//  	9Hacer un algoritmo en Pseint para determinar el aumento de un trabajador, se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.
 	
	
	escribir "Inserte su salario"
	leer salario
	
	total= 0
	si salario > 2000 entonces
		total = salario * 0.05;
	SiNo
		si salario <= 2000 entonces
			total = salario * 10/100;
			
		FinSi
		
	FinSi
	
	totalsalario = total + salario;
	escribir "Salario aumento a $", totalsalario;
	
	
	
	
	
	
FinProceso
