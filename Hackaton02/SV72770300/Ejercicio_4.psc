Proceso Ejercicio_4
	
	Definir n1, n2, n3, nComprobar Como Entero
	
	Escribir "Ingrese 1º número entero"
	Leer n1
	Escribir "Ingrese 2º número entero"
	Leer n2
	Escribir "Ingrese 3º número entero"
	Leer n3
	
	Si n1 < n2 y n2 < n3 Entonces
		Escribir n1, " ",n2, " ",n3
	SiNo
		Si n2 < n1 y n1 < n3 Entonces
			Escribir n2, " ",n1, " ",n3
		SiNo
			Si n3 < n2 y n2 < n1 Entonces
				Escribir n3, " ",n2, " ",n1
			SiNo
				Si n3 < n1 y n1 < n2 Entonces
					Escribir n3, " ", n1, " ",n2
				SiNo
					Si n2 < n3 y n3 < n1 Entonces
						Escribir n2, " ",n3, " ",n1
					SiNo
						Escribir n1, " ",n3, " ",n2
					Fin Si
				Fin Si
			Fin Si
		Fin Si
	Fin Si
FinProceso
