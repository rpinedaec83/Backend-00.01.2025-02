Proceso operaciones_numeros
		Definir num1, num2, num3, num4 Como Entero
		Definir contador_pares, mayor, suma Como Entero
		Definir media Como Real
		
		contador_pares <- 0
		mayor <- 0
		suma <- 0
		
		Escribir "Ingrese el primer número: "
		Leer num1
		Escribir "Ingrese el segundo número: "
		Leer num2
		Escribir "Ingrese el tercer número: "
		Leer num3
		Escribir "Ingrese el cuarto número: "
		Leer num4
		
		// Números_pares
		Si num1 MOD 2 = 0 Entonces
			contador_pares <- contador_pares + 1
		FinSi
		Si num2 MOD 2 = 0 Entonces
			contador_pares <- contador_pares + 1
		FinSi
		Si num3 MOD 2 = 0 Entonces
			contador_pares <- contador_pares + 1
		FinSi
		Si num4 MOD 2 = 0 Entonces
			contador_pares <- contador_pares + 1
		FinSi
		
		// Cantidad_números_pares
		Escribir "La cantidad de números pares es: ", contador_pares
		
		// Mayor_números
		mayor <- num1
		Si num2 > mayor Entonces
			mayor <- num2
		FinSi
		Si num3 > mayor Entonces
			mayor <- num3
		FinSi
		Si num4 > mayor Entonces
			mayor <- num4
		FinSi
		
		Escribir "El mayor número es: ", mayor
		
		// Cuadrado_segundo
		Si num3 MOD 2 = 0 Entonces
			Escribir "El cuadrado del segundo número es: ", num2 * num2
		FinSi
		
		// Media_4_números
		Si num1 < num4 Entonces
			media <- (num1 + num2 + num3 + num4) / 4
			Escribir "La media de los 4 números es: ", media
		FinSi
		
		// Si el segundo es mayor que el tercero, verificar si el tercero está entre 50 y 700
		Si num2 > num3 Entonces
			Si num3 >= 50 Y num3 <= 700 Entonces
				suma <- num1 + num2 + num3 + num4
				Escribir "La suma de los 4 números es: ", suma
			FinSi
		FinSi
FinProceso
