//35. Hacer un algoritmo en Pseint que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.

Proceso Ejercicio35
	Escribir "Ingrese 20 n�meros:"
    Leer num
    mayor = num
    menor = num
    
    Para i <- 2 Hasta 20 Hacer
        Leer num
        Si num > mayor Entonces
            mayor = num
        Fin Si
        Si num < menor Entonces
            menor = num
        Fin Si
    Fin Para
    Escribir "El n�mero mayor es: ", mayor
    Escribir "El n�mero menor es: ", menor
FinProceso