Proceso fibonacci
Definir n, i, a, b, c Como Entero

Escribir "Ingrese la cantidad de términos que desea de la serie de Fibonacci: "
Leer n

a <- 0
b <- 1

Escribir "La serie de Fibonacci es:"

Si n >= 1 Entonces
	Escribir a 
FinSi

Si n >= 2 Entonces
	Escribir b 
FinSi

Para i <- 3 Hasta n Con Paso 1 Hacer
	c <- a + b 
	Escribir c 
	a <- b 
	b <- c 
FinPara


FinProceso
