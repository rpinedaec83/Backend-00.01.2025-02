Proceso Ejercicio_15
	
	Escribir "Ingrese una medida a convertir"
	Leer medida
	Escribir "Digite 1 si quiere de centímetro a pulgadas, 2 si quiere de libra a kilogramos"
	Leer validar_opcion
	
	cent_pulg = 2.54
	lib_kilo = 2.205
	
	Segun validar_opcion Hacer
		1:
			Escribir medida, " cm equivale a ", medida / cent_pulg, " in"
		2:
			Escribir medida, " lb equivale a ", medida / lib_kilo, " kg"
		De Otro Modo:
			Escribir "Por favor, ingrese una opción válida"
	Fin Segun

FinProceso
