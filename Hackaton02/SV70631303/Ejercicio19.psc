//19. Hacer un algoritmo en Pseint para una heladería se tienen 4 tipos de empleados
//ordenados de la siguiente forma con su número identificador
//y salario diario correspondiente:

//    Cajero (56$/día).

//    Servidor (64$/día).

//    Preparador de mezclas (80$/día).

//    Mantenimiento (48$/día).

//El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros
//que representen al número identificador del empleado y la cantidad de días que trabajó
//en la semana (6 días máximos). Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó

Proceso Ejercicio19
	Definir idEmpleado, dias, salarioDia, totalPagar Como Real
    
	Escribir "Ingrese el identificador del empleado (1-Cajero, 2-Servidor, 3-Preparador, 4-Mantenimiento):"
    Leer idEmpleado
    Escribir "Ingrese los d?as trabajados (m?x 6):"
    Leer dias
    
	Si (idEmpleado == 1 O idEmpleado == 2 O idEmpleado == 3 O idEmpleado == 4) Entonces
		Si dias > 6 Entonces
			Escribir "El limite son 6 días de trabajo"
		SiNo
			Segun idEmpleado Hacer
				1: salarioDia = 56
				2: salarioDia = 64
				3: salarioDia = 80
				De Otro Modo:
					salarioDia = 48
			FinSegun
			totalPagar = salarioDia * dias
			Escribir "El total a pagar es: ", totalPagar
		FinSi
	SiNo
		Escribir "No esta registrado en el sistema ese identificador de empleado"
	FinSi
FinProceso