//	Hacer un algoritmo en Pseint que permita al usuario continuar con el programa

Algoritmo continuarPrograma
	
	Definir  continuar Como Caracter
	Repetir
		Escribir "desea continuar n/s"
		leer continuar
		continuar =Minusculas(continuar)
	Hasta Que continuar='n'
FinAlgoritmo
	