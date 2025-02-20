Algoritmo aproximacion_pi
    Definir n, i, denominador, resultado Como Real
    Escribir "Ingresa el número de términos para la aproximación de Pi: "
    Leer n
	
    resultado = 0
    denominador = 1
	
    Para i = 0 Hasta n-1 Hacer
        Si i Mod 2 = 0 Entonces
            resultado = resultado + (4 / denominador)
        Sino
            resultado = resultado - (4 / denominador)
        FinSi
        denominador = denominador + 2
    FinPara
	
    Escribir "La aproximación de Pi es: ", resultado
FinAlgoritmo