//3. Hacer un algoritmo en Pseint que lea un número y determinar si termina en 4.

Proceso Ejercicio3
	Definir number,ultimoDigito Como Real
	Escribir "Ingrese un n?mero: "
	Leer number
	ultimoDigito = number MOD 10
	Escribir ultimoDigito
	Si ultimoDigito == 4 Entonces
		Escribir "El n?mero ", number, " termina en 4."
	SiNo
		Escribir "El n?mero ", number, " no termina en 4."
	FinSi
FinProceso