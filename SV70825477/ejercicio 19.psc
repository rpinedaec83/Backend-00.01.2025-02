Proceso ejercicio19
	// 	19Hacer un algoritmo en Pseint para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma con su número identificador y salario diario correspondiente:
	
	
	definir cajero Como Entero
	definir servidor Como Entero
	definir preparador como Entero
	definir mnto Como Entero
	definir codigo como entero
	
	Repetir
		escribir "Escribir codigo: 1,2,3 o 4"
		leer codigo
	Hasta Que codigo  <=4
	
	
	opValida = 0
	
	
	respuesta = 0
	
	Segun codigo Hacer
		1:
			escribir "Empleado Cajero"
			pago1=59 * asistencia1
			diaw1=asistencia1+0
			escribir pago1, "$ de Salario" sin saltar
			Escribir " y su asistencia es: ",diaw1," días"
			opValida = 1
		2:
			escribir "Empleado Servidor"
			pago2=64 * asistencia2
			diaw2=asistencia2+0
			escribir pago2, "$ de Salario" sin saltar
			Escribir " y su asistencia es: ",diaw2," días"
			opValida = 1
		3:
			escribir "Empleado Preparador de M"
			pago3=80 * asistencia3
			diaw3=asistencia3+0
			escribir pago3, "$ de Salario" sin saltar
			Escribir " y su asistencia es: ",diaw3," días"
			opValida = 1
		4:
			escribir "Empleado de Mantenimiento"
			pago4=59 * asistencia4
			diaw4=asistencia4+0
			escribir pago4, "$ de Salario" sin saltar
			Escribir " y su asistencia es: ",diaw4," días"
		De Otro Modo:
			Escribir "Opcion No Valida"
	Fin Segun
	
	
	
	
	
FinProceso
