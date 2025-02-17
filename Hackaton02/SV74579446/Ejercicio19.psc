//Ejercicio19
// Hacer un algoritmo en Pseint para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma con su número identificador 
//y salario diario correspondiente:
//Cajero (56$/día).
//Servidor (64$/día).
//Preparador de mezclas (80$/día).
//Mantenimiento (48$/día).
//El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número identificador del empleado 
//y la cantidad de días que trabajó en la semana (6 días máximos). Y el programa le mostrará por pantalla la cantidad de dinero que el dueño 
//le debe pagar al empleado que ingresó

Proceso Sueldo_Empleado
	Definir idEmpleado, diasTrabajados Como Entero
    Definir salarioDiario, salarioTotal Como Real
	
    // Pedir el identificador del empleado
    Escribir "Ingrese el número identificador del empleado:"
    Escribir "1 - Cajero"
    Escribir "2 - Servidor"
    Escribir "3 - Preparador de mezclas"
    Escribir "4 - Mantenimiento"
    Leer idEmpleado
	
    // Pedir la cantidad de días trabajados
    Escribir "Ingrese la cantidad de días trabajados (máximo 6):"
    Leer diasTrabajados
	
    // Validar días trabajados
    Si diasTrabajados < 1 O diasTrabajados > 6 Entonces
        Escribir "Error: Los días trabajados deben estar entre 1 y 6."
    Sino
        // Determinar el salario diario según el tipo de empleado
        Segun idEmpleado Hacer
            1:
                salarioDiario <- 56
            2:
                salarioDiario <- 64
            3:
                salarioDiario <- 80
            4:
                salarioDiario <- 48
            De Otro Modo:
                Escribir "Error: Número identificador no válido."
		FinSegun
	FinSi

salarioTotal <- salarioDiario * diasTrabajados

Escribir "El empleado con identificador ", idEmpleado, " trabajó ", diasTrabajados, " días."
Escribir "El pago total es: ", salarioTotal
   
FinProceso
