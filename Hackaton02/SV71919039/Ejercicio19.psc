Proceso Ejercicio19
    Definir id_empleado, dias_trabajados, salario, salario_diario Como Entero
	
    Escribir "Ingrese el número identificador del empleado (1-4): "
    Leer id_empleado
	
    Si id_empleado < 1 O id_empleado > 4 Entonces
        Escribir "Identificador no válido. Ingrese un número entre 1 y 4."
    Sino
        
        Escribir "Ingrese la cantidad de días trabajados (máximo 6 días): "
        Leer dias_trabajados
		
        Si dias_trabajados < 1 O dias_trabajados > 6 Entonces
            Escribir "Número de días no válido. Ingrese entre 1 y 6 días."
        Sino
            
            Si id_empleado = 1 Entonces
                salario_diario = 56
            Sino
                Si id_empleado = 2 Entonces
                    salario_diario = 64
                Sino
                    Si id_empleado = 3 Entonces
                        salario_diario = 80
                    Sino
                        salario_diario = 48
                    FinSi
                FinSi
            FinSi
			
            salario = salario_diario * dias_trabajados
			
            Escribir "El salario a pagar al empleado es: $", salario
        FinSi
    FinSi
FinProceso