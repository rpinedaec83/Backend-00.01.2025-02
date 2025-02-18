//Ejercicio 10
//Hacer un algoritmo en Pseint que diga si un número es par o impar.

Proceso numPar_Impar
	Definir num Como Entero
	
	Escribir "Ingrese un numero:"
	Leer num
	
	si num MOD 2 = 0 Entonces
		Escribir "El numero ", num, " es par"
	SiNo
		Escribir "El numero ", num, " es impar"
	FinSi
FinProceso
