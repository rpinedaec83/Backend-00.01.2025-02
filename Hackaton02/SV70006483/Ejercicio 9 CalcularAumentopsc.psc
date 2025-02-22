Proceso CalcularAumento
    Definir salario, aumento, nuevo_salario Como Real
	
    // Pedir el salario actual del trabajador
    Escribir "Ingrese el salario actual del trabajador: "
    Leer salario
	
	porcentaje <- 0
	
    // Determinar el porcentaje de aumento
    Si salario > 2000 Entonces
        aumento <- salario * 0.05  // Aumento del 5%
		porcentaje <- 5
    Sino
        aumento <- salario * 0.10  // Aumento del 10%
		porcentaje <- 10
    FinSi
	
    // Calcular el nuevo salario
    nuevo_salario <- salario + aumento
	
    // Mostrar resultados
    Escribir "El aumento es del ",porcentaje,"%: $", aumento
    Escribir "El nuevo salario del trabajador es: $", nuevo_salario
FinProceso
