Proceso ejercicio3
	// Pseint que lea un número y determinar si termina en 4
	
	Definir num,ud Como Entero
	escribir "Digite el número"
	leer num
	va1=num
	si num<0
		num=num*(-1)
	FinSi
	si num>=0
		ud=num-trunc(num/10)*10
	FinSi
	si ud == 4
		escribir "El numero ",va1," termina en 4"
	FinSi
	
	
FinProceso
