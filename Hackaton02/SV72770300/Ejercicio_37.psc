Proceso Ejercicio_37
	
	Definir residuo, cociente, a, b Como Entero
	
	Escribir "Digite el 1º número"
	Leer n1
	Escribir "Digite el 2º número"
	Leer n2
	
	a = n1
	b = n2
	
	Mientras b <> 0 Hacer
		residuo = a MOD b
		a = b
		b = residuo
	Fin Mientras
	
	Escribir "M.C.D (", n1, ";", n2,") es:",a
	
FinProceso
