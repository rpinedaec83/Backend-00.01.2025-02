//20. Hacer un algoritmo en Pseint que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:

//  ¿Cuántos números son Pares?

//  ¿Cuál es el mayor de todos?

//  Si el tercero es par, calcular el cuadrado del segundo.

//  Si el primero es menor que el cuarto, calcular la media de los 4 números.

// Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condición,
// calcular la suma de los 4 números.

Proceso Ejercicio20
	Definir n1, n2, n3, n4, pares, mayor Como Entero
    
	Escribir "Ingrese cuatro n?meros enteros positivos:"
    Leer n1, n2, n3, n4
	
    pares = 0
    
	Si n1 MOD 2 = 0 Entonces 
		pares = pares + 1
	Fin Si
	
	Si n2 MOD 2 = 0 Entonces 
		pares = pares + 1 
	Fin Si
	
	Si n3 MOD 2 = 0 Entonces 
		pares = pares + 1 
	Fin Si
	
	Si n4 MOD 2 = 0 Entonces 
		pares = pares + 1 
	Fin Si
	
	mayor = n1
	
	Si n2 > mayor Entonces 
		mayor = n2 
	Fin Si
	
	Si n3 > mayor Entonces 
		mayor = n3 
	Fin Si
	
	Si n4 > mayor Entonces 
		mayor = n4 
	Fin Si
	
	Escribir "Cantidad de n?meros pares: ", pares
	Escribir "N?mero mayor: ", mayor
	
	Si n3 MOD 2 = 0 Entonces
		Escribir "El cuadrado del segundo n?mero es: ", n2 * n2
	Fin Si
	
	Si n1 < n4 Entonces
		Escribir "Media de los 4 n?meros: ", (n1 + n2 + n3 + n4) / 4
	Fin Si
	Si n2 > n3 Entonces
		Si n3 >= 50 Y n3 <= 700 Entonces
			Escribir "Suma de los n?meros: ", n1 + n2 + n3 + n4
		Fin Si
	Fin Si
FinProceso