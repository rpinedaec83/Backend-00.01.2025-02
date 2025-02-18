Algoritmo salario_empleado
    Definir id_empleado, dias_trabajados, salario Como Entero
	
    Escribir "Introduce el número identificador del empleado (1-4): "
    Leer id_empleado
    Escribir "Introduce la cantidad de días trabajados (1-6): "
    Leer dias_trabajados
	
    Si id_empleado = 1 Entonces
        salario = 56 * dias_trabajados
    Sino
        Si id_empleado = 2 Entonces
            salario = 64 * dias_trabajados
        Sino
            Si id_empleado = 3 Entonces
                salario = 80 * dias_trabajados
            Sino
                Si id_empleado = 4 Entonces
                    salario = 48 * dias_trabajados
                Sino
                    Escribir "Número identificador no válido."
                FinSi
            FinSi
        FinSi
    FinSi
	
    Escribir "El salario a pagar es: $", salario
FinAlgoritmo