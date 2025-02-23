Proceso Ejercicio_26
	
	Definir dividendo, divisor, resto, cociente Como Entero
	
	Escribir "Digite un número a divir por favor"
	Leer dividendo
	Escribir "Digite el divisor por favor"
	Leer divisor
	
	Si divisor == 0 Entonces
		Escribir "El divisor no puede ser 0. Por favor, verificar."
	SiNo
		
		resto = dividendo
		cociente = 0
		Mientras resto >= divisor Hacer
			
			resto = resto - divisor
			cociente = cociente + 1
		Fin Mientras
		
		Escribir "Resto: ",resto
		Escribir "Cociente: ",cociente
		
	Fin Si
	
FinProceso
