Algoritmo mayor_y_menor
    Definir numero, mayor, menor Como Entero
    Para i = 1 Hasta 20 Hacer
        Escribir "Ingresa el número ", i, ": "
        Leer numero
		
        Si numero > mayor Entonces
            mayor = numero
        FinSi
		
        Si numero < menor Entonces
            menor = numero
        FinSi
    FinPara
	
    Escribir "El número mayor es: ", mayor
    Escribir "El número menor es: ", menor
FinAlgoritmo