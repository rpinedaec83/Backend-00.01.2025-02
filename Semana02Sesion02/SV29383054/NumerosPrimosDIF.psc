//ingresar un número entero n (mayor o igual a 1) y muestra los n primeros números primos:
Algoritmo NumerosPrimos
	Definir n, contador, numero, i como Entero
	contador <- 0
	numero <- 2
	
	Escribir "Ingrese un número entero mayor o igual a 1:"
	Leer n
	
	Mientras contador < n
		i <- 2
		primo <- Verdadero
		
		Mientras i <= numero / 2
			Si numero % i = 0 Entonces
				primo <- Falso
				//Salir10
				
			Fin Si
			i <- i + 1
		Fin Mientras
		
		Si primo = Verdadero Entonces
			Escribir numero
			contador <- contador + 1
		Fin Si
		
		numero <- numero + 1
	Fin Mientras
FinAlgoritmo